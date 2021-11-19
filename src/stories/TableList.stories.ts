import { Story, Meta, moduleMetadata, componentWrapperDecorator } from "@storybook/angular";
import { CommonModule } from "@angular/common";
import * as TableStories from './Table.stories';
import { TableListComponent } from "src/app/components/table-list/table-list.component";
import { TableComponent } from "src/app/components/table/table.component";

export default {
  component: TableListComponent,
  decorators: [
    moduleMetadata({
      declarations: [TableComponent, TableListComponent],
      imports: [CommonModule]
    }),
    componentWrapperDecorator(story => `<div style="margin: 4em">${story}</div>`)
  ],
  title: 'Table List'
} as Meta;

const Template: Story<TableListComponent> = args => ({
  props: {
    ...args,
    onEditShopper: TableStories.actionsData.onEdit,
    onDeleteShopper: TableStories.actionsData.onDelete,
    selected: TableStories.actionsData.onSelected
  }
});

export const Default = Template.bind({});
Default.args = {
  shoppers: [
    {...TableStories.Default.args?.shopper, id: '1', name: 'Ono', date: new Date(2021, 4, 15), amount: 4009.34},
    {...TableStories.Default.args?.shopper, id: '2', name: 'Ben', date: new Date(2021, 4, 15), amount: 5000},
    {...TableStories.Default.args?.shopper, id: '3', name: 'Narcisse Egonu', date: new Date(2021, 4, 15), amount: 4500}
  ]
}

export const TableWithActions = Template.bind({});
TableWithActions.args = {
  shoppers: [
    {...TableStories.Default.args?.shopper, id: '1', name: 'Ono', date: new Date(2021, 4, 15), amount: 4009.34},
    {...TableStories.Default.args?.shopper, id: '2', name: 'Ben', date: new Date(2021, 4, 15), amount: 5000},
    {...TableStories.Default.args?.shopper, id: '3', name: 'Narcisse Egonu', date: new Date(2021, 4, 15), amount: 4500}
  ],
  state: 'actions'
}

export const TableWithTags = Template.bind({});
TableWithTags.args = {
  shoppers: [
    {...TableStories.Default.args?.shopper, id: '1', name: 'Ono', date: new Date(2021, 4, 15), amount: 4009.34, tag: 'completed'},
    {...TableStories.Default.args?.shopper, id: '2', name: 'Ben', date: new Date(2021, 4, 15), amount: 5000, tag: 'ongoing'},
    {...TableStories.Default.args?.shopper, id: '3', name: 'Narcisse Egonu', date: new Date(2021, 4, 15), amount: 4500, tag: 'cancelled'}
  ],
  state: 'tags'
}

export const TableWithSelection = Template.bind({});
TableWithSelection.args = {
  shoppers: [
    {...TableStories.Default.args?.shopper, id: '1', name: 'Ono', date: new Date(2021, 4, 15), amount: 4009.34, tag: 'completed'},
    {...TableStories.Default.args?.shopper, id: '2', name: 'Ben', date: new Date(2021, 4, 15), amount: 5000, tag: 'ongoing'},
    {...TableStories.Default.args?.shopper, id: '3', name: 'Narcisse Egonu', date: new Date(2021, 4, 15), amount: 4500, tag: 'cancelled'}
  ],
  state: 'selection'
}

export const TableWithAttachment = Template.bind({});
TableWithAttachment.args = {
  shoppers: [
    {...TableStories.Default.args?.shopper, id: '1', name: 'Ono', date: new Date(2021, 4, 15), amount: 4009.34, tag: 'completed', attachment: 'attachment.jpg'},
    {...TableStories.Default.args?.shopper, id: '2', name: 'Ben', date: new Date(2021, 4, 15), amount: 5000, tag: 'ongoing', attachment: 'attachment.jpg'},
    {...TableStories.Default.args?.shopper, id: '3', name: 'Narcisse Egonu', date: new Date(2021, 4, 15), amount: 4500, tag: 'cancelled', attachment: 'attachment.jpg'}
  ],
  state: 'attachment'
}

export const LoadingTable = Template.bind({});
LoadingTable.args = {
  shoppers: [],
  loading: true
}

export const EmptyTable = Template.bind({});
EmptyTable.args = {
  ...LoadingTable.args,
  loading: false,
  state: 'empty'
}
