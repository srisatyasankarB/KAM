import { NgModule } from '@angular/core';
import { VeevaService } from './veeva.service';
import { VEEVA_SERVICE } from '../iveeva.service';

@NgModule({
  providers: [
    { provide: VEEVA_SERVICE, useClass: VeevaService }
  ]
})
export class VeevaModule { }
