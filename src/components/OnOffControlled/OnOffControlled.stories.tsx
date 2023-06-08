
import type { Meta, StoryObj } from '@storybook/react';
import {action} from '@storybook/addon-actions'
import {OnOffControlled} from './Controlled';
import {useState} from 'react';


const meta: Meta<typeof OnOffControlled> = {
    title: 'OnOff stories',
    component: OnOffControlled,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof OnOffControlled>;


/*export const ModeChanging = ()=> {
    const [on, setOn]=useState<boolean>(false)
    return <OnOffControlled on={on} setOn={setOn}></OnOffControlled>}*/
export const OnMode: Story = {
    args: {
        on: true,
        setOn: action("on/off was clicked")
    },
};
export const OffMode: Story = {
    args: {
        on: false,
        setOn: action("on/off was clicked")
    },
};




