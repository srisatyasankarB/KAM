import { Injectable, Inject } from '@angular/core';
import { VEEVA_SERVICE, IVeevaService } from 'src/app/veeva/iveeva.service';
import { Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AffiliationsService {

  constructor(@Inject(VEEVA_SERVICE) private veevaService: IVeevaService) {
  }

  getAffiliationsData(): Observable<any> {
    let physicians: Array<any> = [{}];
    let accounts: Array<any> = [{}];

    let accountsApi = this.veevaService.getAccounts();
    let physiciansApi = this.veevaService.getPhysicians();

    return combineLatest(accountsApi, physiciansApi).pipe(map(results => {
      return {
        accounts: results[0],
        physicians: results[1]
      }
    }));
  }
}
