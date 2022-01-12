import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  readonly ApiBaseUrl="https://localhost:44391/api"
  readonly PhotoUrl="https://localhost:44391/Photos"

  constructor(private http:HttpClient) {  }

  getDepList():Observable<any[]>{
      return  this.http.get<any>(this.ApiBaseUrl+'/department');
   }
   addDeparatment(val:any){
     return this.http.post(this.ApiBaseUrl+'/department',val);
   }
   updateDeparatment(val:any){
    return this.http.put(this.ApiBaseUrl+'/department',val);
  }
  deleteDeparatment(val:any){
    return this.http.delete(this.ApiBaseUrl+'/department/'+val);
  }

  getEmpList():Observable<any[]>{
    return  this.http.get<any>(this.ApiBaseUrl+'/employee');
 }
 addEmployee(val:any){
   return this.http.post(this.ApiBaseUrl+'/employee',val);
 }
 updateEmployeet(val:any){
  return this.http.put(this.ApiBaseUrl+'/employee',val);
}
deleteEmployee(val:any){
  return this.http.delete(this.ApiBaseUrl+'/employee/'+val);
}

uploadPhote(val:any){
  return this.http.post(this.ApiBaseUrl+'/Employee/SaveFile',val);
}

getAllDepartmentNames():Observable<any[]>{
  return this.http.get<any[]>(this.ApiBaseUrl+'/Employee/GetAllDepartmentNames');
}
}
