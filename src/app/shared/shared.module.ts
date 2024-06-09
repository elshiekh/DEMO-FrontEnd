
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { PaginatorModule } from 'primeng/paginator';
import { TabMenuModule } from 'primeng/tabmenu';
import { TabViewModule } from 'primeng/tabview';
import { ToastModule } from 'primeng/toast';
import { PrimengModule } from './primeng.module';
import { NoDataComponent } from './no-data/no-data.component';

import { SearchComponentComponent } from './search-component/search-component.component';
import { TableComponent } from './table/table.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    InputTextModule,
    DropdownModule,
    CalendarModule,
    ButtonModule,
    ToastModule,
    PrimengModule,
  ],
  declarations: [  NoDataComponent,TableComponent,SearchComponentComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    InputTextModule,
    DropdownModule,
    CalendarModule,
    ButtonModule,
    ToastModule,
    PaginatorModule,
    TabMenuModule,
    TabViewModule,
    PrimengModule,
  ],
  providers: [MessageService],
})
export class SharedModule {}
