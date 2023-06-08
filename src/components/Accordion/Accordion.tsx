import React from "react";
export type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    setCollapsed: (c: boolean)=>void
    /**
     * Color of Accordion title text
     */
    color?: string
    onClick?: ()=>void
}
export function Accordion(props: AccordionPropsType){
        return (
            <div>
                <AccordionTitle title={props.titleValue} setCollapsed={props.setCollapsed} collapsed={props.collapsed} color={props.color ? props.color: "#000"}/>
                {!props.collapsed && <AccordionBody title={props.titleValue}/>}
            </div>
        )

}
type AccordionTitlePropsType = {
    title: string
    collapsed: boolean
    setCollapsed: (c: boolean)=>void
    color: string
}
function AccordionTitle(props:AccordionTitlePropsType){
    console.log("AccordionTitle rendering")
    return (
        <h3 onClick={()=>props.setCollapsed(!props.collapsed)} style={{color: props.color ? props.color : "#000"}}>{props.title}</h3>
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


