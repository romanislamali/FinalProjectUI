import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Room } from '../model/room.model';
import { Observable } from 'rxjs';
import { ApiResponse } from '../model/api.response';
import { Roomtype } from '../model/roomtype.model';
import { RoomFacilities } from '../model/roomfacilities.model';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  baseUrl:string = "http://localhost:8085/";

  constructor(private httpClient : HttpClient) { }

  createRoom(r: Room): Observable<ApiResponse> {
    return this.httpClient.post<ApiResponse>(this.baseUrl + "room/add", r);
  }

  getAllRoom(): Observable<Room> {
    return this.httpClient.get<Room>(this.baseUrl+"room/all");
  }

  getRoomById(rid:number): Observable<any>{
    return this.httpClient.get<any>(this.baseUrl+"room/"+rid);
  }

  getAllRoomByHotelId(hid:number): Observable<any>{
    return this.httpClient.get<any>(this.baseUrl+"roombyhotelid/"+hid);
  }
  
  //Make room deactive
  blockBookedRoom(id: number) {
    return this.httpClient.patch(this.baseUrl+"room/status/"+id, id);
  }

  //Make room active
  activeBookedRoom(id: number) {
    return this.httpClient.patch(this.baseUrl+"room/status/true/"+id, id);
  }


}
