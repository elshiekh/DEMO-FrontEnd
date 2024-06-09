import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SharedTable } from './table';
import { FormBuilder, FormControl } from '@angular/forms';
import { ComparisonOperations } from './comparison.enum';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  // filterText: FormControl;

  @Input() tableData: SharedTable = new SharedTable();
  @Input() StatusStyle: boolean = false;
  @Output() deleteRow = new EventEmitter<string>();
  @Output() editRow = new EventEmitter<string>();
  @Output() viewRow = new EventEmitter<string>();
  @Output() paginate = new EventEmitter<string>();
  @Output() routeEvent = new EventEmitter<string>();
  @Output() addEvent = new EventEmitter<string>();
  @Output() exportEvent = new EventEmitter<string>();
  @Output() cellClick = new EventEmitter<string>();
  @Input() checkbox: boolean = false;
  @Input() loading: boolean = false;

  items: MenuItem[] = [
    {
      label: 'Options',
      items: [
        {
          label: 'Update',
          icon: 'pi pi-refresh',
          command: () => {
            this.edit(1);
          },
        },
        {
          label: 'Delete',
          icon: 'pi pi-times',
          command: () => {
            this.delete(1);
          },
        },
      ],
    },
    {
      label: 'Navigate',
      items: [
        {
          label: 'Angular',
          icon: 'pi pi-external-link',
          url: 'http://angular.io',
        },
        {
          label: 'Router',
          icon: 'pi pi-upload',
          routerLink: '/fileupload',
        },
      ],
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  delete(id: any) {
    this.deleteRow.emit(id);
  }

  edit(id: any) {
    this.editRow.emit(id);
  }
  view(id: any) {
    if (this.tableData.viewRow) this.viewRow.emit(id);
  }

  changePage(e: any) {
    this.tableData.pageFilter.currentPage = e.page + 1;
    this.paginate.emit(e.page + 1);
  }

  isClicked(id: any) {
    console.log(this.tableData.selectedItems);
  }
  route(header: any, rowdata: any) {
    let body: any = {
      header: header,
      rowData: rowdata,
    };
    this.routeEvent.emit(body);
  }
  checkLink(col: any) {
    let isExist = false;
    this.tableData.clickableLinks.forEach((link: any) => {
      if (link.header == col) isExist = true;
    });
    return isExist;
  }
  Add() {
    this.addEvent.emit();
  }
  export(){
    this.exportEvent.emit();
  }
}
