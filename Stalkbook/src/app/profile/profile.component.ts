import { Component, OnInit } from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material';
export interface ProfileElement {
  CodeChef: number;
  CodeForces: number;
  HackerEarth: number;
  HackerRank: number;
  Spoj: number;
  UVa: number;
  Timus: number;
}
const ELEMENT_DATA: ProfileElement[] = [
  { CodeChef: 12, CodeForces: 32 , HackerEarth: 12 , HackerRank: 20, Spoj: 0, UVa: 10, Timus: 0},
];

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  displayedColumns: string[] = ['CodeChef', 'CodeForces', 'HackerEarth', 'HackerRank', 'Spoj', 'UVa', 'Timus'];
  dataSource = new MatTableDataSource<ProfileElement>(ELEMENT_DATA);
  selection = new SelectionModel<ProfileElement>(true, []);
  pieChartData = {
    chartType: 'PieChart',
    dataTable: [
      ['Type', 'Submissions'],
      ['Accepted', 56],
      ['Wrong Answer', 40],
      ['Time Limit Exceeded', 6],
      ['RunTime Error', 1],
      ['Compile Error', 12],
      ['Hacked', 1],
    ],
    options: {height: 400, width: 700,},
  };
  pieChartData1 = {
    chartType: 'LineChart',
    dataTable: [
      ['Month', 'Ratings',],
      ['Apr', 1400],
      ['Jul', 1470],
      ['Oct', 1600],
      ['2018', 900],
      ['Apr', 1770],
      ['Jul', 1875],
    ],
    options: {height: 300, width: 800,},
  };
}
