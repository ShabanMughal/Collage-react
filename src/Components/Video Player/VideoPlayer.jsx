import React, { useRef } from 'react'
import './VideoPlayer.css'
import VideoPlay from '../../assets/Alpha.mp4'

const VideoPlayer = ({play,setPlay}) => {

    const player = useRef(null)

    const closePlayer = (e)=>{
        if (e.target === player.current) {
            setPlay(false)
        }
    }

  return (
    <div className={`video-player ${play?'':'hide'}`} ref={player} 
    onClick={closePlayer}>
        <video src={VideoPlay} autoPlay controls muted></video>
    </div>
  )
}

export default VideoPlayer