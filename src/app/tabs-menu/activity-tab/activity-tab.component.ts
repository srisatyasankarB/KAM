import { Component, OnInit } from '@angular/core';
import { ActivityTabService } from './activity-tab.service';

@Component({
  selector: 'tmc-activity-tab',
  templateUrl: './activity-tab.component.html',
  styleUrls: ['./activity-tab.component.css']
})
export class ActivityTabComponent implements OnInit {
  pie: any;

  constructor(private service: ActivityTabService) { 
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

  initiatives: Array<any> = [{}];
  interactions: Array<any> = [{}];

  ngOnInit() {
    this.service.getActivitiesData().subscribe((data: any) => {
      this.initiatives = data.initiatives;
      this.interactions = data.interactions;
    });
  }

}
