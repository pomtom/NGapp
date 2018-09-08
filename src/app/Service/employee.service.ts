import { Injectable } from '@angular/core';
import { IEmployee } from 'src/app/Service/iemployee';
import { Iemployeeservice } from './iemployeeservice';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { error } from 'util';

@Injectable({
    providedIn: 'root'
})

@Injectable()
export class EmployeeService implements Iemployeeservice {


    constructor(private _http: Http) { }

    public GetMockEmployee(): IEmployee[] {
        return [
            { Id: 1, Name: 'pramod', Age: 30, Salary: 99000, BirthDate: '08/3/1992', Gender: 'Male' },
            { Id: 2, Name: 'kavita', Age: 30, Salary: 250000, BirthDate: '09/3/1992', Gender: 'FeMale' },
            { Id: 3, Name: 'sachin', Age: 28, Salary: 55000, BirthDate: '10/3/1992', Gender: 'Male' },
            { Id: 4, Name: 'deepak', Age: 25, Salary: 75000, BirthDate: '11/3/1992', Gender: 'Male' },
            { Id: 5, Name: 'ketki', Age: 21, Salary: 35000, BirthDate: '12/3/1992', Gender: 'FeMale' },
            { Id: 6, Name: 'rushabh', Age: 27, Salary: 25000, BirthDate: '10/3/1992', Gender: 'Male' },
            { Id: 7, Name: 'Trusha', Age: 23, Salary: 22000, BirthDate: '09/3/1992', Gender: 'FeMale' },
            { Id: 8, Name: 'Kedar', Age: 29, Salary: 22000, BirthDate: '08/3/1992', Gender: 'Male' },
            { Id: 9, Name: 'Kranti', Age: 20, Salary: 22000, BirthDate: '07/3/1992', Gender: 'FeMale' },
            { Id: 10, Name: 'Shaila', Age: 15, Salary: 220, BirthDate: '06/3/1992', Gender: 'FeMale' },
            { Id: 11, Name: 'James', Age: 39, Salary: 5000, BirthDate: '06/3/1985', Gender: 'Male' }

        ];
    }

    GetAllEmployee(): Observable<IEmployee[]> {
        return this._http.get('http://zixer.azurewebsites.net/api/values/get')
            .map((resp: Response) => <IEmployee[]>resp.json())
            .catch(this.HandleError);
    }

    HandleError(err: Response) {
        console.log(err);
        return Observable.throw(err);
    }

}
