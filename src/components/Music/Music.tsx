import React from 'react'
import s from './Music.module.css'

export const Music = () => {
    return (
        <div className={s.music}>
          <iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1DX5trt9i14X7j"
                  title='spotify'
                  width="80%" height="380" frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"/>
        </div>
    )
}