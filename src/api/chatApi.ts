let subscribers = {
  'messages-received': [] as MessagesReceivedSubscribedType[],
  'status-changed': [] as StatusChangedSubscribedType[],
}

let ws: WebSocket;

const closeHandler = () => {
  notifySubscribersAboutStatus('pending')
  setTimeout(createChannel, 3000)
}

const messageHandler = (e: MessageEvent) => {
  let newMessages = JSON.parse(e.data)
  subscribers['messages-received'].forEach(s => s(newMessages))
}

const openHandler = () => {
  notifySubscribersAboutStatus('ready')
}

const errorHandler = () => {
  notifySubscribersAboutStatus('error')
  console.warn('Please, refresh your page')
}

const cleanUp = () => {
  ws?.removeEventListener('close', closeHandler)
  ws?.removeEventListener('message', messageHandler)
  ws?.removeEventListener('open', openHandler)
  ws?.removeEventListener('error', errorHandler)
}

const notifySubscribersAboutStatus = (status: ChatStatusType) => {
  subscribers['status-changed'].forEach(x => x(status))
}

function createChannel() {
  cleanUp()
  ws?.close()
  ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')
  notifySubscribersAboutStatus('pending')
  ws.addEventListener('close', closeHandler)
  ws.addEventListener('message', messageHandler)
  ws.addEventListener('open', openHandler)
  ws.addEventListener('error', errorHandler)
}

export const chatApi = {
  start() {
    createChannel()
  },
  stop() {
    subscribers['messages-received'] = []
    subscribers['status-changed'] = []
    ws?.close()
    cleanUp()
  },
  subscribe(eventName: EventsNamesType, callback: MessagesReceivedSubscribedType | StatusChangedSubscribedType) {
    // @ts-ignore
    subscribers[eventName].push(callback)
    return () => {
      // @ts-ignore
      subscribers[eventName] = subscribers[eventName].filter(s => s !== callback)
    }
  },
  unSubscribe(eventName: EventsNamesType, callback: MessagesReceivedSubscribedType | StatusChangedSubscribedType) {
    // @ts-ignore
    subscribers[eventName] = subscribers[eventName].filter(s => s !== callback)
  },
  sendMessage(message: string) {
    ws?.send(message)
  },
}

//Types
export type ChatMessageAPIType = {
  message: string
  photo: string
  userId: number
  userName: string
}
type MessagesReceivedSubscribedType = (messages: ChatMessageAPIType[]) => void;
type StatusChangedSubscribedType = (status: ChatStatusType) => void;
export type ChatStatusType = 'pending' | 'ready' | 'error';
type EventsNamesType = 'messages-received' | 'status-changed';