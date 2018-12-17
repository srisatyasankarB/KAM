import { Injectable } from '@angular/core';
import { IVeevaService } from '../iveeva.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VeevaService implements IVeevaService {
  
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

}
