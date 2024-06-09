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

  //filter

  filter: any = {
    pageSize: 5,
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
      bookTitle: [null],
      bookDescription: [null],
      author: [null],
      publishDate: [null]
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
    debugger;
    this.searchFilter.bookTitle = this.searchForm.value.bookTitle;
    this.searchFilter.bookDescription = this.searchForm.value.bookDescription;
    this.searchFilter.publishDate = this.searchForm.value.publishDate;
    this.searchFilter.author = this.searchForm.value.author;

    this.bookService.searchBooks(this.searchFilter).subscribe(data => {
      debugger;
      this.tableConfig.pageFilter.totalItems = data['totalRows'];
      debugger;
      console.log(data.result);
      let tableData: any = [];
      data.result?.forEach((e: any) => {
        debugger;
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
      this.totalRows = tableData.length;
      this.tableConfig.pageFilter.totalRows = tableData.length;
      this.tableConfig.tableName = "Books"
    })

  }


  paginate(e: any) {
    // alert(e);
    this.searchFilter.page = e;
    this.tableConfig.pageFilter.pageNumber = e
    this.searchBook()
  }


  route(event: any) {
  }

  editBook(e: any) {
    // this.bookService.deleteBook("W",e,e).subscribe(res=>{
    //   if (res.isSuccess)
    //   {
    //     if (res.data.nextId != null)
    //     {
    //       this.bookService.getParentInfo(e,0).subscribe((res) => {
    //         if (res.isSuccess)
    //         {
    //           this.router.navigate(['/maintenance/work-orders/work-orders-view'], { queryParams: { callId: res.data.callId,id: e } }); 
    //         }
    //       })
    //     }
    //     else
    //     {
    //       this.bookService.getParentInfo(e,0).subscribe((res) => {
    //         if (res.isSuccess)
    //         {
    //           this.router.navigate(['/maintenance/work-orders/work-orders-update'], { queryParams: { callId: res.data.callId,id: e } }); 
    //         }
    //       })
    //     }
    //   }
    // })

  }
  reset() {
    this.first = 0;
  }
}


