import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RoomFacilities } from '../model/roomfacilities.model';

@Injectable({
  providedIn: 'root'
})
export class RoomFacilitiesService {

  baseUrl:string = "http://localhost:8085/";

  constructor(private httpClient : HttpClient) { }
 
  getAllRoomFacilities(): Observable<RoomFacilities> {
    return this.httpClient.get<RoomFacilities>(this.baseUrl+"roomfacilities/all");
  }
}
