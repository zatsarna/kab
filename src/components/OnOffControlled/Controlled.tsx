import React, {useState} from 'react';

type OnOffProps={
    on: boolean
    setOn: (v: boolean)=>void
}
export const OnOffControlled = (props: OnOffProps) => {

    const onStyle={
        width: "40px",
        height: "20px",
        backgroundColor: (props.on) ? "green" : "white",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "10px",
        padding: "5px",
    }
    const offStyle={
        width: "40px",
        height: "20px",
        backgroundColor: (props.on) ? "white" : "red",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "10px",
        padding: "5px",
    }
    const indicator={
        width: "20px",
        height: "20px",
        backgroundColor:  (props.on) ? "green" : "red",
        borderRadius: "50%",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "10px",
        padding: "5px",
    }
    return (
        <div>
            <div style={onStyle} onClick={()=>props.setOn(true)}>On</div>
            <div style={offStyle} onClick={()=>props.setOn(false)}>Off</div>
            <div style={indicator}>+</div>
        </div>
    );
};

