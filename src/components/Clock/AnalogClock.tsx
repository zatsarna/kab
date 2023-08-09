import React from 'react';
import s from './AnalogClock.module.css'
export const AnalogClock =(props: {date: Date})=>{
    const secondsStyle = {
        transform: `rotate(${+props.date.getSeconds() * 6}deg)`
    };
    const minutesStyle = {
        transform: `rotate(${+props.date.getMinutes() * 6}deg)`
    };
    const hoursStyle = {
        transform: `rotate(${+props.date.getHours() * 30}deg)`
    };
    return (<div className={s.analogClock}>
        <div className={`${s.dial} ${s.seconds}`} style={secondsStyle}></div>
        <div className={`${s.dial} ${s.minutes}`} style={minutesStyle}></div>
        <div className={`${s.dial} ${s.hours}`} style={hoursStyle}></div>
    </div>)
}