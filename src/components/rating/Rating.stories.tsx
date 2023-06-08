
import type { Meta, StoryObj } from '@storybook/react';

import {Rating, ValueType} from './Rating';
import {useState} from 'react';
import {action} from '@storybook/addon-actions';

const meta: Meta<typeof Rating> = {
    title: 'Rating stories',
    component: Rating,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const EmptyStar: Story = {
    args: {
        value: 0,
        setRatingValue: ()=>{}
    }
};
export const Rating1: Story = {
    args: {
        value: 1,
        setRatingValue: ()=>{}
    }
};
export const Rating2: Story = {
    args: {
        value: 2,
        setRatingValue: ()=>{}
    }
};

export const Rating3: Story = {
    args: {
        value: 3,
        setRatingValue: ()=>{}
    }
};
export const Rating4: Story = {
    args: {
        value: 4,
        setRatingValue: ()=>{}
    }
};
export const Rating5: Story = {
    args: {
        value: 5,
        setRatingValue: ()=>{}
    }
};

/*export const ChangeRating=()=>{
    const [rating, setRating]=useState<ValueType>(3)
    return <Rating value={rating} setRatingValue={setRating}/>
}*/



