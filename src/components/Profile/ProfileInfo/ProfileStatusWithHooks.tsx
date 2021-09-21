import React, {ChangeEvent, useEffect, useState} from 'react';
import s from './ProfileStatus.module.css';

type ProfileStatusType = {
  profileStatus: string
  updateStatus: (newStatus: string) => void
  isOwner: boolean
}

export const ProfileStatusWithHooks: React.FC<ProfileStatusType> = (
    {
      profileStatus,
      updateStatus,
      isOwner
    }
) => {

  const [editMode, setEditMode] = useState<boolean>(false)
  const [status, setStatus] = useState<string>(profileStatus);

  useEffect(() => {
    setStatus(profileStatus)
  }, [profileStatus])

  const activateEditModeHandler = () => {
    if (isOwner) setEditMode(true);
  }

  const deActivateEditModeHandler = () => {
    updateStatus(status);
    setEditMode(false);
  }

  const changeProfileStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setStatus(e.currentTarget.value)
  }

  return <div className={s.wrapperStatus}>
    {editMode
        ? <div>
          <input
              value={status}
              type="text"
              autoFocus
              onBlur={deActivateEditModeHandler}
              placeholder='print your status'
              onChange={changeProfileStatusHandler}
          />
        </div>
        : <div>
                 <span onDoubleClick={activateEditModeHandler}>
                     <b>Status: </b> {status || 'the user didn\'t write a status...'}
                 </span>
        </div>
    }
  </div>
}



