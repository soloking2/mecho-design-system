// ButtonGroup.stories.ts

import { Story, Meta } from '@storybook/angular/types-6-0';

import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';

import ButtonGroup from './button-group.component';
import Button from './button.component';

//👇 Imports the Button stories
import * as ButtonStories from './Button.stories';

export default {
  title: 'Button Sizes',
  component: ButtonGroup,
  decorators: [
    moduleMetadata({
      declarations: [Button],
      imports: [CommonModule],
    }),
  ],
} as Meta;

const Template: Story<ButtonGroup> = (args) => ({
  props: args,
});



export const Large = Template.bind({});
Large.args = {
  buttons: [
    { ...ButtonStories.LargePrimary.args },
    { ...ButtonStories.LargeSecondary.args },
  ],
  orientation: 'horizontal',
};

export const Medium = Template.bind({});
Medium.args = {
  buttons: [
    { ...ButtonStories.MediumPrimary.args },
    { ...ButtonStories.MediumSecondary.args },
  ],
  orientation: 'horizontal',
};

export const Small = Template.bind({});
Small.args = {
  buttons: [
    { ...ButtonStories.SmallPrimary.args },
    { ...ButtonStories.SmallSecondary.args },
  ],
  orientation: 'horizontal',
};

