import { ComponentMeta, ComponentStory } from '@storybook/react';
import FavoriteList, { IFavoriteList } from './FavoriteList';
import { mockFavoriteListProps } from './FavoriteList.mock';


export default {
  title: 'templates/FavoriteList',
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof FavoriteList>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FavoriteList> = (args) => <FavoriteList {...args} />;

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockFavoriteListProps.base,
} as IFavoriteList;
