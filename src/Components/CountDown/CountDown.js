import React from 'react'
import Digit from './Digit/Digit';






function CountDown(props){

    return(
        <div className=' d-flex '>

            <Digit color="palegreen" value={props.time.min}></Digit>
            <Digit color="skyblue" value={props.time.sec}></Digit>
            <Digit color="salmon" value={props.time.mili}></Digit>
        </div>
    )
}

export default CountDown;