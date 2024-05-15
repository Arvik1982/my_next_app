import React from 'react';
import { Story, Meta } from '@storybook/react';
import { EmptyCardProps } from '@/app/components/ui/EmptyCard/EmptyCard.type';
import EmptyCard from './EmptyCard';
import i from '../../../../../public/images/folder.svg';

export default {
  title: 'Components/EmptyCard',
  tags: ['autodocs'],
  component: EmptyCard,
} as Meta;

const Template: Story<EmptyCardProps> = (args) => {
  return <EmptyCard icon={i} mainText={args.mainText} secondaryText={args.secondaryText} />;
};

export const Default = Template.bind({});
Default.args = {
  mainText: 'No Items Found',
  secondaryText: 'There are no items to display.',
};
