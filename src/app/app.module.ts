import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {CardModule} from 'primeng/card';
import { AccordionMenuModule } from './accordion-menu/accordion-menu.module';
import { TabsMenuModule } from './tabs-menu/tabs-menu.module';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,

    CardModule,
    
    AccordionMenuModule,
    TabsMenuModule,
    environment.veevaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
