import { Story, Meta, moduleMetadata } from "@storybook/angular";
import { CommonModule } from "@angular/common";
import {action} from '@storybook/addon-actions';
import { TableComponent } from "src/app/components/table/table.component";

export default {
  component: TableComponent,
  declarators: [
    moduleMetadata({
      declarations: [TableComponent],
      imports: [CommonModule]
    })
  ],
  excludeStories: /.*Data$/,
  title: 'Table'
} as Meta;


export const actionsData = {
  onEdit: action('onEditShopper'),
  onDelete: action('onDeleteShopper'),
  onSelected: action('onSelected')
}

const Template: Story<TableComponent> = args => ({
  props: {
    ...args,
    onEditShopper: actionsData.onEdit,
    onDeleteShopper: actionsData.onDelete,
    onSelected: actionsData.onSelected
  }
})

export const Default = Template.bind({});
Default.args = {
  shopper: [
    {
      id: '1',
      name: 'Ogheneruona Onothoja',
      date: new Date(2021, 6, 14),
      amount: 500,
      tag: 'completed'
    }
  ]
}

