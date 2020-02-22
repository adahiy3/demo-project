import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IEmployee } from './employee';
import { Observable, throwError} from 'rxjs'

import { map,catchError} from 'rxjs/operators';





@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private _url : string = "/assets/data/employee.json"

  public getEmployees(): Observable<IEmployee[]>
  {
   // return this.http.get<IEmployee[]>(this._url)

    return this.http.get<IEmployee[]>(this._url).pipe(
      // eg. "map" without a dot before
      map(data => {
        return data;
      }),
      // "catchError" instead "catch"
      catchError((error: HttpErrorResponse) =>{       
        //return throwError(error.message || 'server error');   
        return Observable.throw(error.message || 'server error') 
      })
    );
  }

  // {return [
  //   {"id":1,"employeeName":"Amit","salary":2000},
  //   {"id":2,"employeeName":"Sumit","salary":3000},
  //   {"id":2,"employeeName":"Anju","salary":4000},
  // ]}

  constructor(private http: HttpClient) { }
}
