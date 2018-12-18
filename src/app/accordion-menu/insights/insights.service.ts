import { Injectable,Inject } from '@angular/core';
import { VEEVA_SERVICE, IVeevaService } from 'src/app/veeva/iveeva.service';
import { Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class InsightsService {

  constructor(@Inject(VEEVA_SERVICE) private veevaService: IVeevaService) {
  }
  getInsightsData(): Observable<any> {
    return this.veevaService.getInsights().pipe(map(result=>{
      return {
       insights:result
      }
    }));
  }
}
