import { Injectable } from '@angular/core';
import { IVeevaService } from '../iveeva.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VeevaMockService implements IVeevaService {
  getInteractions(): Observable<any> {
    return of([
      {date: new Date(2018, 10, 1), type: "Call", representative: "Jai Girard"},
      {date: new Date(2018, 10, 2), type: "Sample", representative: "Campbell De Veen"},
      {date: new Date(2018, 10, 3), type: "Email", representative: "Vijay Elzinga"},
      {date: new Date(2018, 10, 4), type: "Speaker Program", representative: "Alfred Albertson"},
    ]);
  }

  getInitiatives(): Observable<any> {
    return of([
      {id:1, strategy: "Coordinate functions and expertise with all internal stakeholders", owner:"Fedir Trucco", due: new Date(2018, 11, 1), status: "assets/images/u465.png",
      tasks:[ 
        {task: "Email new Head of Oncology", assignedTo: "Garth Jordá", assignedOn: new Date(2018, 10, 1), status: "assets/images/u465.png"},
        {task: "Meet with Dr. Anthony Bennet and Dr. Xia Nikolaev for interviews", assignedTo: "Mark Seward", assignedOn: new Date(2018, 10, 2), status: "assets/images/u467.png"},
        {task: "Profile the new Pharmacy department", assignedTo: "Gwalchmei Babin", assignedOn: new Date(2018, 10, 3), status: "assets/images/u467.png"},
      ]},
      {id:2, strategy: "Establish governance system for 2018 initiatives", owner:"Josephine Sung", due: new Date(2018, 11, 2), status: "assets/images/u468.png",
      tasks:[ 
        {task: "Email new Head of Oncology", assignedTo: "Garth Jordá", assignedOn: new Date(2018, 10, 1), status: "assets/images/u465.png"},
        {task: "Meet with Dr. Anthony Bennet and Dr. Xia Nikolaev for interviews", assignedTo: "Mark Seward", assignedOn: new Date(2018, 10, 2), status: "assets/images/u467.png"},
        {task: "Profile the new Pharmacy department", assignedTo: "Gwalchmei Babin", assignedOn: new Date(2018, 10, 3), status: "assets/images/u467.png"},
      ]},
      {id:3, strategy: "Grow sales by 25% this quarter vs last quarter", owner:"Helena Garth", due: new Date(2018, 11, 3), status: "assets/images/u467.png",
      tasks:[ 
        {task: "Email new Head of Oncology", assignedTo: "Garth Jordá", assignedOn: new Date(2018, 10, 1), status: "assets/images/u465.png"},
        {task: "Meet with Dr. Anthony Bennet and Dr. Xia Nikolaev for interviews", assignedTo: "Mark Seward", assignedOn: new Date(2018, 10, 2), status: "assets/images/u467.png"},
        {task: "Profile the new Pharmacy department", assignedTo: "Gwalchmei Babin", assignedOn: new Date(2018, 10, 3), status: "assets/images/u467.png"},
      ]},
    ]);
  }

  getAccountTeams(): Observable<any> {
    return of([
      {id:1, name: "Almira Merlin", role:"Sales Representative", email: "amerlin@nefit.com", phone:"301 253 9074", img: "assets/images/u703.png"},
      {id:1, name: "Gene Vasquez", role:"Key Account Manager", email: "gvasquez@nefit.com", phone:"209 871 4000", img: "assets/images/u716.png"},
      {id:1, name: "Mark Seward", role:"Nurse Educator", email: "mseward@nefit.com", phone:"412 673 9384", img: "assets/images/u718.png"},
      {id:1, name: "Eponine Sam", role:"Medical Science Liaison", email: "esam@nefit.com", phone:"537 368 0584", img: "assets/images/u711.png"},
      {id:1, name: "Gene Sam", role:"Sales Educator", email: "gsam@nefit.com", phone:"537 368 0444", img: "assets/images/u716.png"},
    ]);
  }

  getInsights() : Observable<any> {
    return of([
      {id:1, date: "May 7, 2018", info: "4 new patients have been diagnosed in the last week."},
      {id:2, date: "April 30, 2018", info: "New Clinical Trial  initiated for Dasaturumab for 3L HER2+ patients. Dr. Wayne Martin will be the chief investigator at Taylor Medical Center."},
      {id:3, date: "April 24, 2018", info: "Key stakeholder, Dr. Hyeon Sung-hoon, in your account has been identified."},
      {id:4, date: "April 15, 2018", info: "Dr. Winston Jennings has recently published an article in the American Medical Journal."},
      {id:5, date: "April 07, 2018", info: "Mariema Initiative has become an investor for this account."}
    ]);
  }
  getAccountProf() : Observable<any> {
    return of([
      {id:1, accountType: "Top 10", mission: "Grow to Top 5",profitStatus:"Non Profit",providerControl :"Commercial",specialtyPharmacy:"80",strengths:"Population density growing in area & influx of physicians.",weaknesses:"None observed",opportunities:"None observed",threats:"Competitor providing discounts",beds:[{id:2, licenseBeds: "120", censusBeds: "150",staffedBeds:"180"}]},
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
