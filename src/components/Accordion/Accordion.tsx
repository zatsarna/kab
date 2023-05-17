import React from "react";
type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    setCollapsed: (c: boolean)=>void
}
export function Accordion(props: AccordionPropsType){
        return (
            <div>
                <AccordionTitle title={props.titleValue} setCollapsed={props.setCollapsed} collapsed={props.collapsed}/>
                {!props.collapsed && <AccordionBody title={props.titleValue}/>}
            </div>
        )

}
type AccordionTitlePropsType = {
    title: string
    collapsed: boolean
    setCollapsed: (c: boolean)=>void
}
function AccordionTitle(props:AccordionTitlePropsType){
    console.log("AccordionTitle rendering")
    return (
        <h3 onClick={()=>props.setCollapsed(!props.collapsed)}>{props.title}</h3>
    )
}
function AccordionBody(props:any){
    console.log("AccordionBody rendering")
    return (
        <ul>
            <li>1 {props.title}</li>
            <li>2 {props.title}</li>
            <li>3 {props.title}</li>
        </ul>
    )
}


