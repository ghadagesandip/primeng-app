import { Component, OnInit } from '@angular/core';
import { RoleService } from './../roles/roles.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  charts:any;
  constructor(private roleSerice: RoleService) {
    this.charts = [
      {
        title: 'Activity Report',
        filter: 'Today'
      },
      {
        title: 'Lead Report',
        filter: 'Yesterday'
      },
      {
        title: 'Cases Report',
        filter: 'This Monnth'
      }
    ]
  }

  ngOnInit(): void {
  }

  add(){
    this.roleSerice.login({})
  }

}
