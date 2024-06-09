import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.scss']
})
export class SearchComponentComponent {

  @Output() OnSearch:EventEmitter<void> = new EventEmitter<void>();
  @Output() OnReset:EventEmitter<void> = new EventEmitter<void>();

  constructor() {

  }

  Search() {
    this.OnSearch.next();
  }

  Reset(){
    this.OnReset.next();
  }

}
