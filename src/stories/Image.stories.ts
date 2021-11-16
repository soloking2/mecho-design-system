import { Story, Meta } from "@storybook/angular/types-6-0";
import { ImageComponent } from "src/app/image/image.component";

export default {
  title: 'Example/Image Component',
  component: ImageComponent
} as Meta;

const Template: Story<ImageComponent> = (args: ImageComponent)  => ({
  props: args
})


export const NoImageCaption = Template.bind({});
NoImageCaption.args = {
  figCaptionTxt: ''
}

export const WithImageCaption = Template.bind({});
WithImageCaption.args = {
  figCaptionTxt: 'The French hotel in pondicherry'
}


export const ImageWithFullOpacity = Template.bind({});
ImageWithFullOpacity.args = {
  imgOpacity: 1
}

export const ImageWithHalfOpacity = Template.bind({});
ImageWithHalfOpacity.args = {
  imgOpacity: 0.5
}
