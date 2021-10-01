import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-widget4',
  templateUrl: './widget4.component.html',
  styleUrls: ['./widget4.component.scss']
})
export class Widget4Component implements OnInit, OnChanges {

  data:any;

  @Input('title') title: string ='';
  @Input('filter') filter: string ='Month';

  chartTitle:string ='';
  currentFilter:string = '';

  constructor() { 
    this.data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
            label: 'First Dataset',
            data: [65, 59, 80, 81, 56, 55, 40]
        }
      ]
    }
  }

  ngOnChanges(changes: SimpleChanges){
    console.log('changes', changes)
    if(changes.title && changes.title.currentValue){
      this.chartTitle = changes.title.currentValue;
    }
    if(changes.filter && changes.filter.currentValue){
      this.currentFilter = changes.filter.currentValue;
    }
  }

  ngOnInit(): void {
    console.log('title', this.title)
    console.log('filter', this.filter)
  }

  update(event: Event) {
    this.currentFilter = 'Today';
    this.data = {
      labels: ['January', 'February', 'March', 'April'],
      datasets: [
        {
            label: 'First Dataset',
            data: [Math.random() * 100 , Math.random() * 100, Math.random() * 100, Math.random() * 100]
        }
      ]
    }
  }

}
