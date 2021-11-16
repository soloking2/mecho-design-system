// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import Button from './button.component';

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<Button> = (args: Button) => ({
  props: args,
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
Primary.args = {
  primary: true,
  label: 'Button',
};

export const LargeSecondary = Template.bind({});
LargeSecondary.args = {
  size: 'large',
  primary: false,
  label: 'Big Button',
};

export const LargePrimary = Template.bind({});
LargePrimary.args = {
  size: 'large',
  primary: true,
  label: 'Big Button',
};

export const MediumPrimary = Template.bind({});
MediumPrimary.args = {
  size: 'medium',
  primary: true,
  label: 'Button',
};

export const MediumSecondary = Template.bind({});
MediumSecondary.args = {
  size: 'medium',
  primary: false,
  label: 'Button',
};

export const SmallSecondary = Template.bind({});
SmallSecondary.args = {
  size: 'small',
  primary: false,
  label: 'Small button'
}

export const SmallPrimary = Template.bind({});
SmallPrimary.args = {
  size: 'small',
  primary: true,
  label: 'Small Button'
}


