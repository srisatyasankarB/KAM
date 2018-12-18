import { Component, OnInit } from '@angular/core';
import { KeyStakeholdersService } from './key-stakeholders.service';
import * as moment from 'moment';

@Component({
  selector: 'tmc-key-stakeholders',
  templateUrl: './key-stakeholders.component.html',
  styleUrls: ['./key-stakeholders.component.css']
})
export class KeyStakeholdersComponent implements OnInit {
  stakeholders: Array<any>;

  constructor(private service: KeyStakeholdersService) { }

  ngOnInit() {
    this.service.getStakeholdersData().subscribe((data: any) => {
      this.stakeholders = data.stakeholders;
    });
  }

  displayStakeholders: boolean = false;

  showStakeholdersDialog() {
      this.displayStakeholders = true;
  }

}
