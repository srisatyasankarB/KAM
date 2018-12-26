import { Component, OnInit,Injectable,Inject  } from '@angular/core';
import { PerformanceTabService} from "./performance-tab.service";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'tmc-performance-tab',
  templateUrl: './performance-tab.component.html',
  styleUrls: ['./performance-tab.component.css']
})
export class PerformanceTabComponent implements OnInit {
    accountPerform: Array<any> = [{}];
    selectedDuration={code:6};

  

  constructor( private PerformanceTabService: PerformanceTabService) { 
    //  this.options = {
    //    legend: {
    //        display: false
    //    },
  };

  ngOnInit() {
    this.PerformanceTabService.getPerformanceData().subscribe((data: any) => {
        console.log(data);
      this.accountPerform = data.accountPerfom;
   
       });
       console.log(this.selectedDuration);
  }

      

 

}
