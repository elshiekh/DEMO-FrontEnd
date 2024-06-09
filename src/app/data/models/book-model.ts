export class BookSearch {
  bookTitle: string | null = null;
  bookDescription: string | null = null;
  author: string | null = null;
  publishDate: Date | null = null;
  pageNumber: number | null = 1;
  pageSize: number | null = 10;
  constructor() {
    this.pageSize = 10
    this.pageNumber = 1
  }
}

export class BookModel {
  bookTitle: string | null = null;
  bookDescription: string | null = null;
  author: string | null = null;
  publishDate: string | null = null;
}
