import { Component, OnInit } from '@angular/core';
import {NavjreadService} from '../navjread.service';
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  public fillNav = []; public lNav = [];
  constructor(private navrd: NavjreadService, public auth: AuthService) { }

  ngOnInit() {
    console.log("in sidenav on init");
    this.navrd.getNavchild('assets/lsidnav.json').subscribe(data => {this.lNav = data; });
    this.navrd.getNavchild('assets/sidnav.json').subscribe(data => {this.fillNav = data; });
  }

}
