import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Room } from '../model/room.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  baseUrl:string = "http://localhost:8085/";

  constructor(private httpClient : HttpClient) { }



  // getAllRoomByLocationId(hid:number):Observable<Room>{

  //   return this.httpClient.get<Room>(this.baseUrl+"roombyhotelid/"+hid);

  //  }
}
