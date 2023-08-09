import React, {useEffect, useState} from 'react';
import {DigitalClock} from './DigitalClock';
import {AnalogClock} from './AnalogClock';

type ClockPropsType={mode: 'analog' | 'digital' }

export const Clock = (props: ClockPropsType) => {
    const [date, setDate] = useState(new Date());


    useEffect(()=>{
        const intervalId=setInterval(()=>{
            setDate(new Date())
        }, 1000)

        //this function will execute when component will rerender or die [date]
        //this function will execute when component will  die []
        return ()=>{clearInterval(intervalId)}
    },[])


    let view
    switch (props.mode){
        case 'digital':
            view= <DigitalClock date={date}/>
        break;
        case 'analog':
        default :
            view= <AnalogClock date={date}/>
    }
    return <>{view}</>
};


