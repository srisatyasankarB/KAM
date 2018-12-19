import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PerformanceTabComponent } from './performance-tab/performance-tab.component';
import { ActivityTabComponent } from './activity-tab/activity-tab.component';
import { TabsMenuComponent } from './tabs-menu.component';

import {TabViewModule} from 'primeng/tabview';
import {CardModule} from 'primeng/card';
import {TableModule} from 'primeng/table';
import {ChartModule} from 'primeng/chart';
import {DropdownModule} from 'primeng/dropdown';
import {CheckboxModule} from 'primeng/checkbox';
import {AccordionModule} from 'primeng/accordion';
import {PanelModule} from 'primeng/panel';

@NgModule({
  declarations: [
    PerformanceTabComponent, 
    ActivityTabComponent, 
    TabsMenuComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TabViewModule,
    TableModule,
    ChartModule,
    DropdownModule,
    CheckboxModule,
    AccordionModule,
    CardModule,
    PanelModule
  ],
  exports:[
    PerformanceTabComponent, 
    ActivityTabComponent, 
    TabsMenuComponent
  ]
})
export class TabsMenuModule { }
