import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  charts:any;
  constructor() {
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


}
