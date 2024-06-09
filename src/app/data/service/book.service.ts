import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  baseUrl: string = environment.BaseURL;
  url: string = 'Book/';
   myheader: HttpHeaders = new HttpHeaders({
    Authorization: environment.secretKeys
});
  constructor(private http: HttpClient) {}

  postBook(data: any) {
   
    return this.http.post<any>(this.baseUrl + this.url + 'AddNewBook', data, { headers: this.myheader }).pipe(
      map((res: any) => {
        console.log(res);
        return res;
      })
    );
  }

  searchBooks(data: any) {
    debugger;
    return this.http.post<any>(this.baseUrl + this.url + 'GetAllBooks', data, { headers: this.myheader }).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  updateBook(data: any) {
    return this.http.put(this.baseUrl + this.url + 'UpdateBook', data,{ headers: this.myheader }).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  deleteBook(id: any) {
    return this.http.delete(this.baseUrl + this.url + 'DeleteBook'+ id ,{ headers: this.myheader }).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  getBookById(bookId: number){
    return this.http
    .get<any>(this.baseUrl + this.url + 'GetBookById?id=' + bookId,{ headers: this.myheader })
    .pipe(
      map((res: any) => {
     
        return res;
      })
    );
  }
}
