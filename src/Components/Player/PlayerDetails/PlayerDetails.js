import React from 'react'
import classes from "./playerDetails.module.css"


const PlayerDetails = (props) => {
 return (
  <React.Fragment>
   <h3 className={classes.songName}>{props.song.tittle}</h3>
   <p className={classes.artistName}>{props.song.artist}</p>
  </React.Fragment>
 )
}

export default PlayerDetails
