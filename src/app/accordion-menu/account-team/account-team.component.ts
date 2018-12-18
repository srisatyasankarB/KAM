import { Component, OnInit } from '@angular/core';
import { AccountTeamService } from './account-team.service';

@Component({
  selector: 'tmc-account-team',
  templateUrl: './account-team.component.html',
  styleUrls: ['./account-team.component.css']
})
export class AccountTeamComponent implements OnInit {
  accounts: Array<any>;

  constructor(private service: AccountTeamService) { }

  ngOnInit() {
    this.service.getAccountTeamsData().subscribe((data: any) => {
      this.accounts = data.accountTeams;
    });
  }

  displayAccountTeam: boolean = false;

  showAccountTeamDialog() {
      this.displayAccountTeam = true;
  }

}
