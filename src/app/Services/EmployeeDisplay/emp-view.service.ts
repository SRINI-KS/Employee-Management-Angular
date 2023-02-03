import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmpDetails } from 'src/app/Models/Employee/emp-details';

@Injectable({
  providedIn: 'root'
})
export class EmpViewService {

  baseUrl="http://localhost:8080";
  constructor(private http:HttpClient) { }
  
  public getEmployees():Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/employee/allEmployees`);
  }

  public addEmployees(Emp:EmpDetails):Observable<EmpDetails>{
    return this.http.post<EmpDetails>(`${this.baseUrl}/employee/add`,Emp);
  }

  public updatateEmployees(Emp:EmpDetails):Observable<EmpDetails>{
    return this.http.put<EmpDetails>(`${this.baseUrl}/employee/update`,Emp);
  }

  public deleteEmployees(EmpId:number):Observable<void>{
    return this.http.delete<void>(`${this.baseUrl}/employee/delete/${EmpId}`);
  }

}
