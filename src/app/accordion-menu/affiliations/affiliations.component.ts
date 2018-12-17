import { Component, OnInit, Inject } from '@angular/core';
import { AffiliationsService } from './affiliations.service';

@Component({
  selector: 'tmc-affiliations',
  templateUrl: './affiliations.component.html',
  styleUrls: ['./affiliations.component.css']
})
export class AffiliationsComponent implements OnInit {
  physicians: Array<any> = [{}];
  accounts: Array<any> = [{}];

  constructor(private affiliationsService: AffiliationsService) { }

  ngOnInit() {
    this.affiliationsService.getAffiliationsData().subscribe((data: any) => {
      this.accounts = data.accounts;
      this.physicians = data.physicians;
    });
  }

  displayAccounts: boolean = false;
  displayPhysicians: boolean = false;

  showAccountsDialog() {
      this.displayAccounts = true;
  }

  showPhysiciansDialog() {
      this.displayPhysicians = true;
  }

}
