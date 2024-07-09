import { Meta, StoryFn as Story } from '@storybook/react';
import { SIZES_INPUT, VARIANTS_INPUT } from '../shared/styles/inputStyles';
import { SIZE_SM, VARIANT_PRIMARY } from '../constants';
import Input, { IInput } from '.';

export default {
  title: 'UI/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    sizeType: {
      control: 'radio',
      options: SIZES_INPUT,
    },
    variant: {
      control: 'radio',
      options: VARIANTS_INPUT,
    },
    errorState: {
      control: 'boolean',
    },
    placeholder: {
      control: 'text',
    },
    className: {
      control: 'text',
    },
  },
} satisfies Meta<typeof Input>;

const DEFAULT_ARGS: Partial<IInput> = {
  placeholder: 'rrrrebolledohdz@gmail.com',
  sizeType: SIZE_SM,
  variant: VARIANT_PRIMARY,
  errorState: false,
  className: '',
};

export const Default: Story<IInput> = (args) => {
  return <Input type="email" {...args} />;
};

Default.args = DEFAULT_ARGS;

export const File: Story<IInput> = (args) => {
  return <Input type="file" {...args} />;
};

File.args = DEFAULT_ARGS;
