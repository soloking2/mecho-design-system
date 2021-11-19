import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Shopper } from 'src/app/model/shopper';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() shopper: Shopper[] = [];
  @Input() state: any;
  @Output() onEditShopper = new EventEmitter<Event>();
  @Output() onDeleteShopper = new EventEmitter<Event>()
  @Output() onSelected = new EventEmitter<Event>()

  constructor() { }

  ngOnInit(): void {
  }

  onEdit(id: any) {
    this.onEditShopper.emit(id);
  }

  onDelete(id: any) {
    this.onDeleteShopper.emit(id)
  }

  onSelection(id: any) {
    this.onSelected.emit(id)
  }





}
