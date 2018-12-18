import { Injectable } from '@angular/core';
import { IVeevaService } from '../iveeva.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VeevaMockService implements IVeevaService {

  getInsights() : Observable<any> {
    return of([
      {id:1, date: "May 7, 2018", info: "4 new patients have been diagnosed in the last week."},
      {id:2, date: "April 30, 2018", info: "New Clinical Trial  initiated for Dasaturumab for 3L HER2+ patients. Dr. Wayne Martin will be the chief investigator at Taylor Medical Center."},
      {id:3, date: "April 24, 2018", info: "Key stakeholder, Dr. Hyeon Sung-hoon, in your account has been identified."},
      {id:4, date: "April 15, 2018", info: "Dr. Winston Jennings has recently published an article in the American Medical Journal."},
      {id:5, date: "April 07, 2018", info: "Mariema Initiative has become an investor for this account."}
    ]);
  }

  getStakeholders(): Observable<any> {
    return of([
      {id:1, name: "Winston Jennings", title:"MD", role:"Medical Director", kol:true, influence:"High", programs:"Speaker Program 1", sentiment:"assets/images/u685.png", access:"High", calledByOthers: "Yes", contactedOn:new Date(2018, 11, 1), img: "assets/images/u1823.png"},
      {id:1, name: "Calliope Chapman", title:"MD", role:"Head of Oncology",kol:true, influence:"Low", programs:"Speaker Program 2", sentiment:"assets/images/u684.png", access:"Medium", calledByOthers: "No", contactedOn:new Date(2018, 11, 2), img: "assets/images/u1841.png"},
      {id:1, name: "Gustavo Chavez", title:"MD", role:"Head of Pharmacy",kol:false, influence:"High", programs:"Speaker Program 3", sentiment:"assets/images/u682.png", access:"Low", calledByOthers: "Yes", contactedOn:new Date(2018, 11, 3), img: "assets/images/u1842.png"},
    ]);
  }

  getPhysicians(): Observable<any> {
    return of([
      {id:1, name: "Dr. Hanna Li", img: "assets/images/u1435.png"},
      {id:2, name: "Dr. Adrian Marsden", img: "assets/images/u1435.png"},
      {id:3, name: "Dr. Bertha Mason", img: "assets/images/u1435.png"},
      {id:4, name: "Dr. Adrian Marsden", img: "assets/images/u1435.png"},
      {id:5, name: "Dr. Bertha Mason", img: "assets/images/u1435.png"},
      {id:6, name: "Dr. Hanna Marsden", img: "assets/images/u1435.png"},
      {id:7, name: "Dr. Bertha Mason", img: "assets/images/u1435.png"},
      {id:8, name: "Dr. Hanna Mason", img: "assets/images/u1435.png"},
      {id:9, name: "Dr. Adrian Marsden", img: "assets/images/u1435.png"},
    ]);
  }

  getAccounts() : Observable<any> {
    return of([
      {id:1, name: "Berwyn Hospital", img: "assets/images/u1439.png"},
      {id:2, name: "Rochester Center", img: "assets/images/u1439.png"},
      {id:3, name: "Brocklehurst Medical", img: "assets/images/u1439.png"},
      {id:4, name: "Berwyn Hospital", img: "assets/images/u1439.png"},
      {id:5, name: "Brocklehurst Medical", img: "assets/images/u1439.png"},
      {id:6, name: "Rochester Center", img: "assets/images/u1439.png"},
      {id:7, name: "Berwyn Hospital", img: "assets/images/u1439.png"},
      {id:8, name: "Brocklehurst Medical", img: "assets/images/u1439.png"},
      {id:9, name: "Rochester Center", img: "assets/images/u1439.png"},
    ]);
  }
}
