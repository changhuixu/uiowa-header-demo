import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AgGridColumn, AgGridAngular } from 'ag-grid-angular';
import { GridApi, GridOptions } from 'ag-grid-community';

@Component({
  selector: 'app-ag-grid-example1',
  templateUrl: './ag-grid-example1.component.html',
  styleUrls: ['./ag-grid-example1.component.css']
})
export class AgGridExample1Component implements OnInit {
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
  @ViewChild('agGrid', {static: true}) agGrid: AgGridAngular;

  rowData: any;

  constructor(private http: HttpClient) {}

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
}
