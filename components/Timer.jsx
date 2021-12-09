import React, {useState} from 'react'
import styles from "../styles/Home.module.css"

const Timer = ( { timerValue, timerStatus, setTimerStatus} ) => {


function onToggle(e) {
    timerStatus === false ? setTimerStatus(true) : setTimerStatus(false);
  }

    return (
            <div className="timerComponent">
              <button onClick={(e) => onToggle(e)}>
                {timerStatus === false ? `start` : `stop`}
              </button>
              <div>
                {Math.floor(timerValue / 60)}
                 :
                {Math.floor(timerValue - 60 * (Math.floor(timerValue / 60))) > 9 
                 ? Math.floor( timerValue - 60 * (Math.floor(timerValue / 60)))  
                 : `0${Math.floor( timerValue - 60 * (Math.floor(timerValue / 60)))}`} 
                 
              </div>
          </div>
    )
}

export default Timer

