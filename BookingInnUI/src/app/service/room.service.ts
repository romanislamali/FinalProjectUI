import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Room } from '../model/room.model';
import { Observable } from 'rxjs';
import { ApiResponse } from '../model/api.response';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  baseUrl:string = "http://localhost:8085/";

  constructor(private httpClient : HttpClient) { }

  getAllRoomByHotelId(hid:number): Observable<any>{

    return this.httpClient.get<any>(this.baseUrl+"roombyhotelid/"+hid);

   }

  //  blockBookedRoom(id: number): Observable<ApiResponse> {
  //   return this.httpClient.post<ApiResponse>(this.baseUrl +"room/status/"+id);
  // }

}
