import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'no-data',
  templateUrl: './no-data.component.html',
  styleUrls: ['./no-data.component.css']
})
export class NoDataComponent implements OnInit {
  @Input() noDataText: string = "No Data Found";
  constructor() { }

  ngOnInit(): void {
  }

}
