import React from "react";
export type ItemsType ={
    title: string,
    value: number
}
export type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    setCollapsed: (c: boolean)=>void
    /**
     * Color of Accordion title text
     */
    color?: string
    onClick?: ()=>void
    items?: ItemsType[]
}
export function Accordion(props: AccordionPropsType){
        return (
            <div>
                <AccordionTitle title={props.titleValue} setCollapsed={props.setCollapsed} collapsed={props.collapsed} color={props.color ? props.color: "#000"}/>
                {!props.collapsed && <AccordionBody items={props.items ? props.items: []} />}
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
type AccordionBodyProps ={
    items: ItemsType[] | []
}
function AccordionBody(props:AccordionBodyProps){
    console.log("AccordionBody rendering")
    return (
        <ul>
            {props.items.map(el =><li>{el.title}</li> )}
        </ul>
    )
}


