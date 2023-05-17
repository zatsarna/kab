import React, {useState} from 'react';

type OnOffProps={
    onChange: (v: boolean)=>void
}
const OnOff = (props: OnOffProps) => {
    let [on, setOn]=useState(false)
    const onStyle={
        width: "40px",
        height: "20px",
        backgroundColor: (on) ? "green" : "white",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "10px",
        padding: "5px",
    }
    const offStyle={
        width: "40px",
        height: "20px",
        backgroundColor: (on) ? "white" : "red",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "10px",
        padding: "5px",
    }
    const indicator={
        width: "20px",
        height: "20px",
        backgroundColor:  (on) ? "green" : "red",
        borderRadius: "50%",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "10px",
        padding: "5px",
    }
    const setOnHandler=()=>{setOn(true); props.onChange(true)}
    const setOffHandler=()=>{setOn(false); props.onChange(false)}
    return (
        <div>
            <div style={onStyle} onClick={setOnHandler}>On</div>
            <div style={offStyle} onClick={setOffHandler}>Off</div>
            <div style={indicator}>+</div>
        </div>
    );
};

export default OnOff;