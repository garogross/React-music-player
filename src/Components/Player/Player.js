import React, { useState, useRef, useEffect } from 'react'
import classes from "./Player.module.css"
import Controls from "./Controls/Controls"
import PlayerDetails from "./PlayerDetails/PlayerDetails"

import track1 from "../../audio/track1.mp3"
import track2 from "../../audio/track2.mp3"
import track3 from "../../audio/track3.mp3"
import track4 from "../../audio/track4.mp3"
import track5 from "../../audio/track5.mp3"
import track6 from "../../audio/track6.mp3"
import track7 from "../../audio/track7.mp3"
import track8 from "../../audio/track8.mp3"
import track9 from "../../audio/track9.mp3"
import track10 from "../../audio/track10.mp3"


const audios = [track1, track2, track3, track4, track5, track6, track7, track8, track9, track10]

const Player = (props) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioEl = useRef(null)
  

  useEffect(() => {
    if(isPlaying){
      audioEl.current.play()
    } else {
      audioEl.current.pause()
    }
  })

  const skipSong = (forwards = true) => {
    if (forwards) {
      props.setCurrentSongIndex(() => {
        let temp = props.currentSongIndex
        temp++
        if (temp > props.songs.length - 1) {
          temp = 0
        }
        return temp
      })
    } else {
      props.setCurrentSongIndex(() => {
        let temp = props.currentSongIndex
        temp--
        if (temp < 0) {
          temp = props.songs.length - 1
        }
        return temp
      })
    }
  }
  return (
    <div className={classes.player}>
      <audio src={audios[props.currentSongIndex]}  ref={audioEl}></audio>
      <h2>Now Playing</h2>
      <img src="https://cdn.pixabay.com/photo/2012/04/15/18/57/dvd-34919_1280.png" alt="disk" className={`${classes.disk} ${isPlaying && classes.diskAnim}`} />
      <PlayerDetails
        song={props.songs[props.currentSongIndex]}

      />
      <Controls
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        skipSong={skipSong}
      />
    </div>
  )
}

export default Player

