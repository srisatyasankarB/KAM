import { Component, OnInit } from '@angular/core';
import { AccountProfileService} from "./account-profile.service";


@Component({
  selector: 'tmc-account-profile',
  templateUrl: './account-profile.component.html',
  styleUrls: ['./account-profile.component.css']
})
export class AccountProfileComponent implements OnInit {
  accountProf: Array<any> = [{}];
  accountProfTd: Array<any> = [{}];
  cols: any[];
  constructor(private AccountProfileService: AccountProfileService) { }

  ngOnInit() {
    this.AccountProfileService.getAccountProfData().subscribe((data: any) => {
      this.accountProf = data.accountProf;
   
       });
  }

}
