
import type { Meta, StoryObj } from '@storybook/react';
import {action} from '@storybook/addon-actions'
import {Accordion, AccordionPropsType} from './Accordion';
import {useState} from 'react';
const  GetCategoryObj =(categoryName: string)=>({
    table: {
        category: categoryName
    }
})
const meta : Meta<typeof Accordion> = {
    title: 'Accordion stories',
    tags: ['autodocs'],
    component: Accordion,
    argTypes: {
        color: {
            control: 'color',
            ...GetCategoryObj('Color')
        },
        onClick: {
            ...GetCategoryObj("Event")
        }
    }
};
export default meta;
type Story = StoryObj<typeof Accordion>;
const callback=action("Acc mode changed")
/*const Template: Story<AccordionPropsType> = (args) => <Accordion {...args} />
let CollapsedMode=Template.bind({})*/
/*export const UnCollapsedMode=Template.bind({})*/
const onClickCallback=action('item was clicked')
const callbackProps={
    onClick: onClickCallback,
    setCollapsed: callback,
}
export const CollapsedMode: Story = {
    args: {
        ...callbackProps,
        collapsed: true,
        titleValue: 'NewAccCollapsed',

    },
};
export const UnCollapsedMode: Story = {
    args: {
        ...callbackProps,
        collapsed: false,
        titleValue: 'NewAccUnCollapsed',

    }
}
export const ModeChanging: Story = (args: AccordionPropsType)=>{
    const [value, setValue]=useState<boolean>(true)
    return <Accordion {...args} collapsed={value} setCollapsed={setValue}></Accordion>
}
ModeChanging.args ={
    titleValue: 'NewAcc',
    color: "red"
}






