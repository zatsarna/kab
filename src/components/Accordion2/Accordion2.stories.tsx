import {Accordion2} from './Accordion2';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Accordion2> = {
    title: 'Accordion2 stories',
    component: Accordion2,
}

export default meta;
type Story = StoryObj<typeof meta>;

export const ModeChanging: Story = {
    args: {
        titleValue: 'NewAcc2',
    },
};





