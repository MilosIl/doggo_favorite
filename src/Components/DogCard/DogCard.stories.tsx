import { ComponentMeta, ComponentStory } from '@storybook/react';
import DogCard from './DogCard';
import { Breeds } from '../../models/types';
import { mockDogCardProps } from './DogCard.mock';

export default {
  title: 'Dog',
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof DogCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof DogCard> = (args) => <DogCard {...args} />;

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockDogCardProps.base,
} as Breeds;
