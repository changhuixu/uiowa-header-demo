import {
  Component,
  OnInit,
  ViewChild,
  Inject,
  HostListener
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AgGridColumn, AgGridAngular } from 'ag-grid-angular';
import { GridApi, GridOptions } from 'ag-grid-community';
import { DOCUMENT } from '@angular/common';
import { faFilter } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-ag-grid-example1',
  templateUrl: './ag-grid-example1.component.html',
  styleUrls: ['./ag-grid-example1.component.css']
})
export class AgGridExample1Component implements OnInit {
  faFilter = faFilter;
  private gridApi: GridApi;
  private gridColumnApi;
  filter = '';
  gridOptions = <GridOptions>{
    columnDefs: [
      <AgGridColumn>{
        headerName: 'Make',
        field: 'make',
        checkboxSelection: true
      },
      <AgGridColumn>{ headerName: 'Model', field: 'model' },
      <AgGridColumn>{ headerName: 'Price', field: 'price' }
    ],
    // getRowNodeId: row => row.id,
    suppressDragLeaveHidesColumns: true,
    animateRows: true,
    rowSelection: 'multiple',
    floatingFilter: false,
    pagination: true,
    paginationAutoPageSize: true,
    cacheQuickFilter: true,
    defaultColDef: {
      sortable: true,
      filter: true,
      resizable: true
    }
  };
  @ViewChild('agGrid', { static: true }) agGrid: AgGridAngular;

  rowData: any;

  constructor(
    private http: HttpClient,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.loadStyle(
      'https://cdnjs.cloudflare.com/ajax/libs/ag-grid/21.2.1/styles/ag-grid.css'
    );
    this.loadStyle(
      'https://cdnjs.cloudflare.com/ajax/libs/ag-grid/21.2.1/styles/ag-theme-balham.css'
    );
  }

  ngOnInit() {
    this.rowData = this.http.get('https://api.myjson.com/bins/15psn9');
  }
  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.autoSizeAll(); // will resize all visible columns
    this.gridApi.sizeColumnsToFit(); // will resize all columns to fit visible.
  }

  getSelectedRows() {
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    const selectedData = selectedNodes.map(node => node.data);
    const selectedDataStringPresentation = selectedData
      .map(node => node.make + ' ' + node.model)
      .join(', ');
    alert(`Selected nodes: ${selectedDataStringPresentation}`);
  }

  onFilterTextBoxChanged() {
    this.gridOptions.api.setQuickFilter(this.filter);
  }

  private autoSizeAll() {
    const allColumnIds = [];
    this.gridColumnApi.getAllColumns().forEach(function(column) {
      allColumnIds.push(column.colId);
    });
    this.gridColumnApi.autoSizeColumns(allColumnIds);
  }

  @HostListener('window:resize')
  onResize() {
    if (this.gridApi) {
      this.gridApi.sizeColumnsToFit();
    }
  }

  loadStyle(url: string) {
    const tagId = url.replace(/^.*[\\\/]/, '');
    const el = this.document.getElementById(tagId) as HTMLLinkElement;
    if (el) {
      el.href = url;
    } else {
      const style = this.document.createElement('link');
      style.id = tagId;
      style.type = 'text/css';
      style.href = url;
      style.rel = 'stylesheet';

      const head = this.document.getElementsByTagName('head')[0];
      head.appendChild(style);
    }
  }
}
