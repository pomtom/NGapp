import { IEmployee } from 'src/app/Service/iemployee';
import { Observable } from 'rxjs';


export interface Iemployeeservice {
    GetMockEmployee(): IEmployee[];

    GetAllEmployee(): Observable<IEmployee[]>;
}
