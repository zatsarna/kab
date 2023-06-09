import type { Meta, StoryObj } from '@storybook/react';
import Input from './Input';
import React, {ChangeEvent, useRef, useState} from 'react';

const meta: Meta<typeof Input> = {
  title: 'Input',
  tags: ['autodocs'],
  component: Input,
};

export default meta;
type Story = StoryObj<typeof Input>;


export const UncontrolledInput: Story = {
  args: {},
};
export const ControlledInputWithFixedValue: Story = {
  args: {
    value: "it-incubat"
  },
};
export const TrackValueOfUncontrolledInput = () =>{
  let [value, setValue]=useState("")
  const onChangeHandler =(text: string)=>{
    setValue(text)
  }

  return <><Input onChange={onChangeHandler}/> -{value}</>
}
export const GetValueOfUncontrolledInputOnButtonClick = () =>{
  let [value, setValue]=useState("")
  let InputRef=useRef<HTMLInputElement>(null)
  const onClickHandler =()=>{
    const el=InputRef.current as HTMLInputElement
      setValue(el.value)
  }


  return <><input ref={InputRef}/> <button onClick={onClickHandler}>Save</button> - actual value:{value}</>
}
export const ControlledInput = ()=>{
  const [parentValue, setParentValue]=useState("")
  const onChangeHadler = (event: ChangeEvent<HTMLInputElement>) =>{
    setParentValue(event.currentTarget.value)
  }
  return <input value={parentValue} onChange={onChangeHadler}/>
}
export const ControlledCkeckBox = ()=>{
  const [checked, setChecked]=useState(true)
    return <input type={'checkbox'} checked={checked} onChange={(e)=>setChecked(e.currentTarget.checked)}/>
}
export const ControlledSelect = ()=>{
  const [parentValue, setParentValue]=useState<string | undefined>(undefined)
  const onChangeHadler = (event: ChangeEvent<HTMLSelectElement>) =>{
    setParentValue(event.currentTarget.value)
  }
  return <select value={parentValue} onChange={onChangeHadler}>
    <option>none</option>
    <option value={"1"}>Kyiv</option>
    <option value={"2"}>Ukraine</option>
    <option value={"3"}>USA</option>
  </select>
}


