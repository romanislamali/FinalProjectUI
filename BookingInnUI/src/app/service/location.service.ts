import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
<<<<<<< Updated upstream
import { ApiResponse } from '../model/api.response';
=======
>>>>>>> Stashed changes


@Injectable({
  providedIn: 'root'
})
export class LocationService {

  baseUrl: string = "http://localhost:8085";
  constructor(private httpClient: HttpClient) { }

  public createlocation(location: any) {
    return this.httpClient.post(`${this.baseUrl}/location/add`, location);
  }
  
  getAllLocation():Observable<Location>{
    return this.httpClient.get<Location>(this.baseUrl+"/location/all");
   }

<<<<<<< Updated upstream
   deleteLocationbyid(lid : number): Observable<ApiResponse>{
    return this.httpClient.delete<ApiResponse>(this.baseUrl+"/location/delete/{id}");
   }

   

=======
   deleteLocationbyid(lid : number){
    return this.httpClient.delete<Location>(this.baseUrl+"/location/delete/{id}");
   }

>>>>>>> Stashed changes
}
