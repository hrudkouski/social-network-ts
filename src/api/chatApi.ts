let subscribers = [] as SubscribersType[];

let ws: WebSocket;

const closeHandler = () => {
  console.log('CLOSE WS')
  setTimeout(createChannel, 3000)
}

const messageHandler = (e: MessageEvent) => {
  let newMessages = JSON.parse(e.data)
  subscribers.forEach(s => s(newMessages))
}

function createChannel() {
  ws?.removeEventListener('close', closeHandler)
  ws?.close()
  ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')
  ws.addEventListener('close', closeHandler)
  ws.addEventListener('message', messageHandler)
}

export const chatApi = {
  start() {
    createChannel()
  },
  stop() {
    subscribers = []
    ws?.close()
    ws?.removeEventListener('close', closeHandler)
    ws?.removeEventListener('message', messageHandler)
  },
  subscribe(callback: SubscribersType) {
    subscribers.push(callback)
    return () => {
      subscribers = subscribers.filter(s => s !== callback)
    }
  },
  unSubscribe(callback: SubscribersType) {
    subscribers = subscribers.filter(s => s !== callback)
  },
  sendMessage(message: string) {
    ws?.send(message)
  },
}

//Types
export type ChatMessageType = {
  message: string
  photo: string
  userId: number
  userName: string
}
type SubscribersType = (messages: ChatMessageType[]) => void