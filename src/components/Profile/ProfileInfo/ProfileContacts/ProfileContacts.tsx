import React from "react";

type ContactPropsType = {
  contactTitle: string
  contactValue: string | undefined
}

export const Contacts: React.FC<ContactPropsType> = ({contactTitle, contactValue}) => {
  return (
      <div style={{marginLeft: '20px'}}>
        <span><i>{contactTitle}</i>:
                <a style={{marginLeft: '10px'}}
                   href={contactValue}
                   rel={'noreferrer'}
                   target={'_blank'}
                   title={'contact ref'}>
                  {contactValue}
                </a>
            </span>
      </div>
  )
}