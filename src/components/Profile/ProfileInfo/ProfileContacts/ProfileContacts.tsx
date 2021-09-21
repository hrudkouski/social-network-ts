import React from "react";
import p from './ProfileStatus.module.css'

type ContactPropsType = {
  contactTitle: string
  contactValue: string | undefined
}

export const ProfileContacts: React.FC<ContactPropsType> = (
    {
      contactTitle,
      contactValue
    }) => {
  return (
      <div className={p.wrapper}>
        <span><i>{contactTitle}</i>:
                <a href={contactValue}
                   rel={'noreferrer'}
                   target={'_blank'}
                   title={'contact ref'}>
                  {contactValue}
                </a>
            </span>
      </div>
  )
}