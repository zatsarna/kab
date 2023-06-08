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
export const ControlledInput: Story = {
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



