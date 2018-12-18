import { Injectable,Inject } from '@angular/core';
import { VEEVA_SERVICE, IVeevaService } from 'src/app/veeva/iveeva.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AccountProfileService {
  constructor(@Inject(VEEVA_SERVICE) private veevaService: IVeevaService) {
  }
  getAccountProfData():Observable<any>{
    return this.veevaService.getAccountProf().pipe(map(result =>{
      return {
        accountProf:result
       }
    }))

  }
  
}
