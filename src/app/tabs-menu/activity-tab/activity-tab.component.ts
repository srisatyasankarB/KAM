import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tmc-activity-tab',
  templateUrl: './activity-tab.component.html',
  styleUrls: ['./activity-tab.component.css']
})
export class ActivityTabComponent implements OnInit {
  pie: any;

  constructor() { 
    

  this.pie = {
    labels: ['Completed','Remaining'],
    datasets: [
        {
            data: [2, 3],
            backgroundColor: [
                "#6E2B62",
                "#ddd"
            ]
        }]    
    };
  }

  ngOnInit() {
  }

}
