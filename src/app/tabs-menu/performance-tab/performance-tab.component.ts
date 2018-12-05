import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tmc-performance-tab',
  templateUrl: './performance-tab.component.html',
  styleUrls: ['./performance-tab.component.css']
})
export class PerformanceTabComponent implements OnInit {
  data1: any;
  data2: any;
  
  options: any;
  durations:any;
  selectedDuration: any;

  constructor() { 
    this.options = {
      legend: {
          display: false
      },
  };

      this.data1 = {
          labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL'],
          datasets: [
              {
                  label: 'First Dataset',
                  data: [6, 3, 8, 2, 5, 10, 25],
                  fill: false,
                  borderColor: '#4bc0c0',
              }
          ]
      };

      this.data2 = {
        labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL'],
        datasets: [
            {
                label: 'First Dataset',
                data: [6, 3, 8, 2, 5, 10, 25],
                fill: false,
                borderColor: 'rgba(245, 139, 21, 1)',
            }
        ]
    };

      this.durations = [
        {name: 'Period to Date', code: '1'},
        {name: '2', code: '1'},
        {name: '3', code: '2'},
        {name: '4', code: '3'},
        {name: '5', code: '4'}
    ];
  }

  ngOnInit() {
  }

}
