import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Shopper } from 'src/app/model/shopper';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.scss']
})
export class TableListComponent implements OnInit {
  @Input() shoppers: Shopper[] = [];
  @Input() loading = false;
  @Input() state: any;
  @Output() onEditShopper = new EventEmitter<Event>();
  @Output() onDeleteShopper = new EventEmitter<Event>();
  @Output() selected = new EventEmitter<Event>()
  constructor() { }

  ngOnInit(): void {
  }

}
