import type { Meta, StoryObj } from '@storybook/react';
import React, {ChangeEvent, useState} from 'react';
import {Select} from './Select';
import {action} from '@storybook/addon-actions';


const meta: Meta<typeof Select> = {
    title: 'Select',
    tags: ['autodocs'],
    component: Select,
};
export default meta;
type Story = StoryObj<typeof Select>;

export const SelectExampleWithValue = ()=>{

    const [value, setValue]=useState<string >("2")

    return (
    <>
        <Select value={value}  items={[{title: "USA", value: "1"}, {title: "China", value: "2"}, {title: "Ukraine", value: "3"}, {title: "Canada", value: "4"}, {title: "Mexico", value: "5"}]} onChange={setValue}/>
    </>
    )
}
export const SelectExampleNoValue = ()=>{

    const [value, setValue]=useState<string >("")


    return (
        <>
            <Select value={value} items={[{title: "USA", value: "1"}, {title: "China", value: "2"}, {title: "Ukraine", value: "3"}, {title: "Canada", value: "4"}, {title: "Mexico", value: "5"}]} onChange={setValue}/>
        </>
    )
}