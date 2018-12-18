import { Injectable } from '@angular/core';
import { IVeevaService } from '../iveeva.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VeevaService implements IVeevaService {
  getAccountProf() {
    throw new Error("Method not implemented.");
  }
  
  getInsights(): Observable<any>{
    return of([{
      
    }]);
  }

  getPhysicians(): Observable<any>{
    return of([{
      
    }]);
  }

  getAccounts(): Observable<any>{
    return of([{
      
    }]);
  }

  getStakeholders(): Observable<any> {
    return of([{
      
    }]);
  }

}
