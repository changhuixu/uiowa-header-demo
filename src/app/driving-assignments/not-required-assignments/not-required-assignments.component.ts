import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AgGridNg2 } from 'ag-grid-angular';
import { AgGridColumn } from 'ag-grid-angular';
import { GridApi, GridOptions } from 'ag-grid-community';

@Component({
  selector: 'app-not-required-assignments',
  templateUrl: './not-required-assignments.component.html',
  styleUrls: ['./not-required-assignments.component.css']
})
export class NotRequiredAssignmentsComponent implements OnInit {
  private gridApi: GridApi;
  private gridColumnApi;
  filter = '';
  gridOptions = <GridOptions>{
    columnDefs: [
      <AgGridColumn>{ headerName: 'Make', field: 'make', checkboxSelection: true },
      <AgGridColumn>{ headerName: 'Model', field: 'model' },
      <AgGridColumn> { headerName: 'Price', field: 'price' }
    ],
    // getRowNodeId: row => row.id,
    suppressDragLeaveHidesColumns: true,
    animateRows: true,
    rowSelection: 'multiple',
    enableFilter: true,
    floatingFilter: false,
    enableSorting: true,
    enableColResize: true,
    pagination: true,
    cacheQuickFilter: true
  };
  @ViewChild('agGrid') agGrid: AgGridNg2;

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
