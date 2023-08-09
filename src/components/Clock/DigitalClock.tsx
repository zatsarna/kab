import React, {useEffect, useState} from 'react';

export const DigitalClock=(props: {date: Date})=>{

    const getString=(n: number)=> n<10 ? '0'+n : n

    const seconds=getString(props.date.getSeconds())
    const min=getString(props.date.getMinutes())
    const hours=getString(props.date.getHours())

    return <div>{hours}: {min}:{seconds}</div>
}