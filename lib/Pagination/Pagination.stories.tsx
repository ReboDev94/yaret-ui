import type { Meta, StoryFn as Story } from '@storybook/react';
import Pagination, { IPagination } from '.';
import { useArgs } from '@storybook/preview-api';
import { ALL_DEFAULT_VARIANTS, VARIANT_PRIMARY } from '../constants';

export default {
  title: 'GENERAL/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    pageCount: {
      control: 'number',
    },
    currentPage: {
      control: 'number',
    },
    variant: {
      control: 'radio',
      options: ALL_DEFAULT_VARIANTS.filter(item => item !== 'light'),
    },
    labelNext: {
      control: 'text',
    },
    labelPrevious: {
      control: 'text',
    },
    onChange: {
      description: 'change current page',
    },
  },
} as Meta;

export const Default: Story<IPagination> = args => {
  const [, updateArgs] = useArgs();
  return (
    <div>
      <Pagination
        {...args}
        onChange={page => updateArgs({ currentPage: page })}
      />
    </div>
  );
};
Default.args = {
  pageCount: 100,
  currentPage: 1,
  variant: VARIANT_PRIMARY,
  labelNext: 'Sig.',
  labelPrevious: 'Ant.',
};
