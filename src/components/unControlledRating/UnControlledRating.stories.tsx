import {UnControlledRating} from './unControlledRating';

import type { Meta, StoryObj } from '@storybook/react';


import {action} from '@storybook/addon-actions';



const meta: Meta<typeof UnControlledRating> = {
    title: 'UnControlledRating stories',
    component: UnControlledRating,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof UnControlledRating>;

export const EmptyRating: Story = {
    args: {
        defaultValue: 0,
        onChange: action("rating changed")
    }
};
export const Rating1: Story = {
    args: {
        defaultValue: 1,
        onChange: action("rating changed")
    }
};
export const Rating2: Story = {
    args: {
        defaultValue: 2,
        onChange: action("rating changed")
    }
};
export const Rating3: Story = {
    args: {
        defaultValue: 3,
        onChange: action("rating changed")
    }
};
export const Rating4: Story = {
    args: {
        defaultValue: 4,
        onChange: action("rating changed")
    }
};
export const Rating5: Story = {
    args: {
        defaultValue: 5,
        onChange: action("rating changed")
    }
};






