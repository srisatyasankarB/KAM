import { NgModule } from '@angular/core';
import { VeevaMockService } from './veeva-mock.service';
import { VEEVA_SERVICE } from '../iveeva.service';

@NgModule({
  providers: [
    { provide: VEEVA_SERVICE, useClass: VeevaMockService }
  ]
})
export class VeevaMockModule { }
