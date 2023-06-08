import {OnOff} from './onOff';

import type { StoryObj } from '@storybook/react';
import type { Meta } from '@storybook/react';
import {action} from '@storybook/addon-actions'




const meta: Meta<typeof OnOff> = {
    title: 'OnOff st',
    component: OnOff,
};

export default meta;
type Story = StoryObj<typeof meta>;


export const OnMode: Story = {
    args: {
        defaultValue:true,
        onChange: action("on/off was clicked")
    }
};
export const OffMode: Story = {
    args: {
        defaultValue:false,
        onChange: action("on/off was clicked")
    }
};




