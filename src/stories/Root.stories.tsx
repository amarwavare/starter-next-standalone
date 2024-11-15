import '../styles/dcp.module.scss';
import './styling.scss';
import { ThemeProvider } from '@/branding/theme/context';
import type { Meta, StoryObj } from '@storybook/react';
import BaseContainerStory from './RootContainer';
import ReduxProvider from '@/config/redux-saga/redux-provider';

const meta: Meta<typeof BaseContainerStory> = {
    component: BaseContainerStory,
    title: 'Base Container',
    decorators: [
        (Story) => (
            <ReduxProvider>
                <ThemeProvider>
                    <Story />
                </ThemeProvider>
            </ReduxProvider>
        )
    ],
}

type Story = StoryObj<typeof meta>;

export const Container: Story = {
    args: {}
}

export default meta;