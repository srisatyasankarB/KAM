import { Injectable,Inject } from '@angular/core';
import { VEEVA_SERVICE, IVeevaService } from 'src/app/veeva/iveeva.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PerformanceTabService {

  constructor(@Inject(VEEVA_SERVICE) private veevaService: IVeevaService) {
  }

  getPerformanceData():Observable<any>{
    return this.veevaService.getPerformanc().pipe(map(result =>{
      return {
        accountPerfom:result
       }
    }))

  }
}
