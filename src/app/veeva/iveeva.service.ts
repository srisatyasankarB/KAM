import { Observable } from 'rxjs';

export const VEEVA_SERVICE = 'VEEVA_SERVICE';
export interface IVeevaService {
    getInteractions(): Observable<any>;
    getAccountTeams(): Observable<any>;
    getInsights(): Observable<any>;
    getPhysicians(): Observable<any>;
    getAccounts(): Observable<any>;
    getStakeholders(): Observable<any>;
    getAccountProf(): Observable<any>;
    getPerformanc(): Observable<any>;
    getInitiatives(): Observable<any>;
}
