import React, {useReducer} from 'react';
import {reducer} from './Reducer';

type AccordionPropsType = {
    titleValue: string
}




export function Accordion2(props: AccordionPropsType){

   /* let [collapsed, setCollapsed]=useState(false)*/
    let [state, dispatch]=useReducer(reducer,{collapsed: false})
    const toggleHandler=()=>dispatch({type: "toggle-collapsed"})
        return (
            <div>
                <AccordionTitle title={props.titleValue} toggleHandler={toggleHandler}/>
                {!state.collapsed && <AccordionBody title={props.titleValue}/>}
            </div>
        )

}
type AccordionTitlePropsType = {
    title: string
    toggleHandler: ()=>void
}
function AccordionTitle(props:AccordionTitlePropsType){
    return (
        <h3 onClick={props.toggleHandler}>{props.title}</h3>
    )
}
function AccordionBody(props:any){
    return (
        <ul>
            <li>1 {props.title}</li>
            <li>2 {props.title}</li>
            <li>3 {props.title}</li>
        </ul>
    )
}


