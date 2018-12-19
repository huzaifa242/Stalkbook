import { Component, OnInit } from '@angular/core';
import {MatSnackBar, MatTableDataSource} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';
export interface PeriodicElement {
  name: string;
  code: string;
  site: string;
  submissions: string;
  accuracy: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { name: 'ONETWO' , code: 'oetw' ,  site: 'CodeChef ', submissions: '263' , accuracy: '50%' },
  { name: 'ONETWO' , code: 'oetw' ,  site: 'CodeChef ', submissions: '263' , accuracy: '50%' },
  { name: 'ONETWO' , code: 'oetw' ,  site: 'CodeChef ', submissions: '263' , accuracy: '50%' },
  { name: 'ONETWO' , code: 'oetw' ,  site: 'CodeChef ', submissions: '263' , accuracy: '50%' },
  { name: 'ONETWO' , code: 'oetw' ,  site: 'CodeChef ', submissions: '263' , accuracy: '50%' }
];

@Component({
  selector: 'app-trendingproblems',
  templateUrl: './trendingproblems.component.html',
  styleUrls: ['./trendingproblems.component.css']
})
export class TrendingproblemsComponent  {

  constructor(public snackBar: MatSnackBar) {
  }

  displayedColumns: string[] = ['name', 'code', 'site', 'submissions', 'accuracy'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);
}

