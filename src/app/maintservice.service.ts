import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Maintenance } from './maintenance';

@Injectable({
  providedIn: 'root'
})
export class MaintserviceService {

  constructor(private http:HttpClient) {   }

  fetchMaintenanceListFromRemote():Observable<any>{
    return this.http.get<any>("http://localhost:8080/maintenance/all");
  }

  addMaintenanceFromRemote(maintenance:Maintenance):Observable<any>{
    return this.http.post<any>("http://localhost:8080/maintenance/create", maintenance);
  }

  fetchMaintenanceByIdFromRemote(maintenanceId:String):Observable<any>{
    return this.http.get<any>("http://localhost:8080/maintenance/read/"+maintenanceId);
  }

  deleteMaintenanceByIdFromRemote(maintenanceId:String):Observable<any>{
    return this.http.delete<any>("http://localhost:8080/maintenance/delete/"+maintenanceId);
  }
}
