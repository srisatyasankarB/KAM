import { Component, OnInit,inject } from '@angular/core';
import { InsightsService } from './insights.service';

@Component({
  selector: 'tmc-insights',
  templateUrl: './insights.component.html',
  styleUrls: ['./insights.component.css']
})
export class InsightsComponent implements OnInit {
  insights: Array<any> = [{}];

  constructor(private InsightsService: InsightsService) { }

  ngOnInit() {
    this.InsightsService.getInsightsData().subscribe((data: any) => {
       this.insights = data.insights;
    });
  }

  display: boolean = false;

    showDialog() {
        this.display = true;
    }

}
