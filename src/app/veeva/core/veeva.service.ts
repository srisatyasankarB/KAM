import { Injectable } from '@angular/core';
import { IVeevaService } from '../iveeva.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VeevaService implements IVeevaService {
  getPerformanc(): Observable<any> {
    throw new Error("Method not implemented.");
  }
  getAccountProf(): Observable<any> {
    throw new Error("Method not implemented.");
  }
  getAccountTeams(): Observable<any> {
    throw new Error("Method not implemented.");
  }
  
  getInsights(): Observable<any>{
    throw new Error("Method not implemented.");
  }

  getPhysicians(): Observable<any>{
    throw new Error("Method not implemented.");
  }

  getAccounts(): Observable<any>{
    throw new Error("Method not implemented.");
  }

  getStakeholders(): Observable<any> {
    throw new Error("Method not implemented.");
  }
 

}
