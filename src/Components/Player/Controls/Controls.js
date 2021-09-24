import React from 'react'
import classes from "./Controls.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay,faPause, faBackward,faForward } from '@fortawesome/free-solid-svg-icons'

const Controls = (props) => {


 const isPlayingHandler = () => {
  props.setIsPlaying(!props.isPlaying)
 }

 const prevSongHandler = () => {
  props.skipSong(true)
 }
 const nextSongHandler = () => {
  props.skipSong(true)
 }

 return (
  <div className={classes.controls}>
   <button onClick={prevSongHandler}>
    <FontAwesomeIcon icon={faBackward}/>
   </button>
   <button onClick={isPlayingHandler}>
    {props.isPlaying ? <FontAwesomeIcon icon={faPause} /> : <FontAwesomeIcon icon={faPlay} />}
    
   </button>
   <button onClick={nextSongHandler}>
    <FontAwesomeIcon icon={faForward}/>
   </button>

  </div>
 )
}

export default Controls
