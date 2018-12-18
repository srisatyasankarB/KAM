import { Injectable, Inject } from '@angular/core';
import { VEEVA_SERVICE, IVeevaService } from 'src/app/veeva/iveeva.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AccountTeamService {

  constructor(@Inject(VEEVA_SERVICE) private veevaService: IVeevaService) { }

  getAccountTeamsData(): Observable<any> {

    return this.veevaService.getAccountTeams().pipe(map(result => {
      return {
        accountTeams: result
      }
    }));
  }
}
