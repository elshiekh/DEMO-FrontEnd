export class SharedTable {
  //---------------------------------
  public tableData: any[];
  public tableData2: any[]; //   the table data
  public tableHeaders: string[]; //   the headers of the table must be compatible with the table data
  public tableHeaders2: string[]; //   the headers of the table must be compatible with the table data
  public idHeader: string; // which header will be used as a unique value
  public pageFilter: any = {
    itemsPerPage: 10,
    currentPage: 1,
    totalItems: null,
  };
  selectedItems: any[] = [];
  clickableLinks: any[] = [];
  //--------------------------------- Action privileges
  public deleteRow: boolean;
  public addRow: boolean;
  public exportRow: boolean;
  public editRow: boolean;
  public viewRow: boolean;
  //--------------------------------- Config
  public tableName: string;
  public pagination: boolean;
  public page: number = 1;
  public itemsPerPage: number = 10;
  public currentPage: number = 1;
  public noDataText: string = 'No Data Found';
  public tdStyles: any = {};

  constructor(
    tableData = [],
    tableData2 = [],
    tableHeaders = [],
    tableHeaders2 = [],
    cellClickHeaders = [],
    idHeader: string = '',
    deleteRow = false,
    editRow = false,
    viewRow = false,
    addRow = true,
    exportRow = true,
    tableName = '',
    pagination = true
  ) {
    this.tableData = tableData;
    this.tableData2 = tableData2;
    this.tableHeaders = tableHeaders;
    this.tableHeaders2 = tableHeaders2;
    this.idHeader = idHeader;
    this.deleteRow = deleteRow;
    this.addRow = addRow;
    this.exportRow = exportRow;
    this.editRow = editRow;
    this.addRow = addRow;
    this.tableName = tableName;
    this.viewRow = viewRow;
    this.pagination = pagination;
  }
}
