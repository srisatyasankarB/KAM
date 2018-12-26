import { Injectable, Inject } from '@angular/core';
import { VEEVA_SERVICE, IVeevaService } from 'src/app/veeva/iveeva.service';
import { Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ActivityTabService {

  constructor(@Inject(VEEVA_SERVICE) private veevaService: IVeevaService) {
  }

  getActivitiesData(): Observable<any> {
    let initiativesApi = this.veevaService.getInitiatives();
    let interactionsApi = this.veevaService.getInteractions();

    return combineLatest(initiativesApi, interactionsApi).pipe(map(results => {
      return {
        initiatives: results[0],
        interactions: results[1]
      }
    }));
  }
}
