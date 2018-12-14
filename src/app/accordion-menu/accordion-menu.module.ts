import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AccordionMenuComponent } from './accordion-menu.component';
import { InsightsComponent } from './insights/insights.component';
import { AccountProfileComponent } from './account-profile/account-profile.component';
import { AffiliationsComponent } from './affiliations/affiliations.component';
import { KeyStakeholdersComponent } from './key-stakeholders/key-stakeholders.component';
import { AccountTeamComponent } from './account-team/account-team.component';

import {AccordionModule} from 'primeng/accordion';
import {ProgressBarModule} from 'primeng/progressbar';
import { TableModule } from 'primeng/table';
import {DialogModule} from 'primeng/dialog';

@NgModule({
  declarations: [
    AccordionMenuComponent, 
    InsightsComponent, 
    AccountProfileComponent, 
    AffiliationsComponent, 
    KeyStakeholdersComponent, 
    AccountTeamComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AccordionModule,
    ProgressBarModule,
    TableModule,
    DialogModule
  ],
  exports:[ AccordionMenuComponent, 
    InsightsComponent, 
    AccountProfileComponent, 
    AffiliationsComponent, 
    KeyStakeholdersComponent, 
    AccountTeamComponent]
})
export class AccordionMenuModule { }
