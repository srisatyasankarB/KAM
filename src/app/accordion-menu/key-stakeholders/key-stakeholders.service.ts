import { Injectable, Inject } from '@angular/core';
import { VEEVA_SERVICE, IVeevaService } from 'src/app/veeva/iveeva.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KeyStakeholdersService {

  constructor(@Inject(VEEVA_SERVICE) private veevaService: IVeevaService) { }

  getStakeholdersData(): Observable<any> {

    return this.veevaService.getStakeholders().pipe(map(result => {
      return {
        stakeholders: result
      }
    }));
  }

}
