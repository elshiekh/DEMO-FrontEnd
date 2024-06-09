import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { BookSearch } from 'src/app/data/models/book-model';
import { BookService } from 'src/app/data/service/book.service';
import { SharedTable } from 'src/app/shared/table/table';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  tableConfig = new SharedTable();
  items!: MenuItem[];
  searchForm!: FormGroup;
  searchFilter = new BookSearch();
  pageSize!: number;
  pageNumber!: number;
  totalRows!: number;
  key!: any;
  disabled: boolean = true;
  loading!: boolean;
  first: number = 0;

  filter: any = {
    pageSize: 10,
    pageNumber: 1,
    bookTitle: null,
    bookDescription: null,
    author: null,
    publishDate: null,
  };
  constructor(private fb: FormBuilder,
    private datePipe: DatePipe,
    public bookService: BookService,
  ) { }
  ngOnInit(): void {
    this.items = [
      { label: 'Home', routerLink: ['/'] },
      { label: 'Search Work Orders' }
    ];
    this.searchForm = this.fb.group({
      bookTitle: this.filter.bookTitle,
      bookDescription: this.filter.bookDescription,
      author: this.filter.author,
      publishDate: this.filter.publishDate
    })

    this.tableConfig.tableHeaders = [
      "Id",
      "Title",
      "Description",
      "author",
      "publishDate",
    ];
    this.tableConfig.deleteRow = false;
    this.tableConfig.editRow = true;
    this.tableConfig.addRow = false;
    this.tableConfig.idHeader = 'Id';
    this.tableConfig.clickableLinks = [{ header: ["Title"] }, { header: "author" }];
    this.searchBook();
  }

  searchBook() {
    Object.assign(this.searchFilter, this.searchForm.value);
    this.searchFilter.bookTitle = this.searchForm.value.bookTitle;
    this.searchFilter.bookDescription = this.searchForm.value.bookDescription;
    this.searchFilter.publishDate = this.searchForm.value.publishDate;
    this.searchFilter.author = this.searchForm.value.author;
    this.searchFilter.pageNumber = this.filter.pageNumber;

    this.bookService.searchBooks(this.searchFilter).subscribe(data => {
      this.tableConfig.pageFilter.totalItems = data.queryResult.totalItems;
      this.totalRows = data.queryResult.totalItems;
      let tableData: any = [];
      data.queryResult.items?.forEach((e: any) => {
        var item = JSON.parse(e.bookInfo)
        tableData.push({
          "BookId": e.bookId,
          "BookTitle": item.BookTitle,
          "BookDescription": item.BookDescription,
          "Author": item.Author,
          "PublishDate": item.PublishDate == null ? '' : this.datePipe.transform(item.PublishDate, 'yyyy-MM-dd'),
        });
      });

      this.tableConfig.tableData = tableData;
      //  this.totalRows = tableData.length;
       this.tableConfig.pageFilter.totalRows = data.queryResult.totalItems;;
      this.tableConfig.tableName = "Books"
    })

  }

  reset() {
    this.searchForm.reset();
    this.searchFilter = new BookSearch();
    this.searchBook();
  }

  paginate(event: any) {
    this.loading = true;
    this.filter.pageNumber = event.page + 1;
    this.searchBook();
    this.loading = false;
  }
}


