import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material';
import {MatSnackBar} from '@angular/material';
export interface PeriodicElement {
  name: string;
  username: string;
  isfriend: boolean;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { name: 'Brijesh', username: 'brijesh_1998', isfriend : true},
  { name: 'Huzaifa', username: 'huzaifa242', isfriend : true},
  { name: 'Kishan', username: 'shyam_456', isfriend : true},
];
const ELEMENT_DATA1: PeriodicElement[] = [
  { name: 'Brijesh', username: 'brijesh_1998' , isfriend : false },
  { name: 'Huzaifa', username: 'huzaifa242' , isfriend : false },
  { name: 'shyam', username: 'shyam_456' , isfriend : false },
];
@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent {
  constructor(public snackBar: MatSnackBar) {}
  displayedColumns: string[] = ['select', 'name',  'username'];
  displayedColumns1: string[] = ['select', 'name',  'username'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);
  dataSource1 = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA1);
  selection1 = new SelectionModel<PeriodicElement>(true, []);
  /** Whether the number of selected elements matches the total number of rows. */
  public message: string;
  public action: string;
  public onChange(event): void {
      if (!event.isfriend) {
        this.message = 'FRIEND';
        event.isfriend = true;
      } else {
        this.message = 'UNFRIEND';
        event.isfriend = false;
      }
      this.snackBar.open(this.message, this.action, {
        duration: 1000,
      });
  }
}
