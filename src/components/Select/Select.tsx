import React, {useEffect, useState} from 'react'
import s from './Select.module.css'

export type ItemType ={
    title: string,
    value: string,
    country: "Ukraine" | "USA" | "Poland",
    populationMln: number
}

type SelectPropsType={
    value: string
    onChange: (value: string) => void
    items: ItemType[]
}

function SelectPrimary(props: SelectPropsType){
    console.log("Select")
    const [active, setActive]=useState(false)
    const [hoveredEl, setHoveredEl]=useState(props.value)
    const selectedItem=
        props.items.find(i => i.value===props.value)
    const hoveredItem=
        props.items.find(i => i.value===hoveredEl)
    function getValueHandler(v: string) {
        props.onChange(v)
    }
    useEffect( ()=>{
        setHoveredEl(props.value)
        }, [props.value]
    )
    const toggleItems = ()=>{
        setActive(!active)
    }
    const onKeyUp = (event : React.KeyboardEvent<HTMLDivElement>)=> {
        if (!selectedItem){
            props.onChange(props.items[0].value)
        }
        for (let i=0; i<props.items.length; i++){
            if (props.items[i].value===hoveredEl && event.key==="ArrowDown" && props.items[i+1]){
                setHoveredEl(props.items[i+1].value)
                getValueHandler(props.items[i+1].value)
                return
            }

            if (props.items[i].value===hoveredEl && event.key==="ArrowUp" && props.items[i-1]){
                setHoveredEl(props.items[i-1].value)
                getValueHandler(props.items[i-1].value)
                return
            }
        }
        if (event.key==="Enter" || event.key==="Escape"){
           setActive(false)
        }

    }
    return (
        <div className={s.container} tabIndex={0} onKeyUp={onKeyUp}>
            <div className={s.select} onBlur={()=>setActive(false)} onClick={toggleItems}>{selectedItem && selectedItem.title}</div>
            <div className={s.items}>{active && props.items.map(i => <div  className={s.select + " " + s.item + " " + (hoveredItem===i ? s.selected : "")} onClick={()=>{getValueHandler(i.value);  setActive(false)}} key={i.value} onMouseEnter={()=>setHoveredEl(i.value)} onMouseLeave={()=>setHoveredEl("")}>{i.title}</div>)}
            </div>
        </div>
    )
}
export const Select=React.memo(SelectPrimary)