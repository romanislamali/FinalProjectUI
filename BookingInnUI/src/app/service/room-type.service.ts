import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Roomtype } from '../model/roomtype.model';

@Injectable({
  providedIn: 'root'
})
export class RoomTypeService {

  baseUrl:string = "http://localhost:8085/";

  constructor(private httpClient : HttpClient) { }

  getAllRoomType(): Observable<Roomtype> {
    return this.httpClient.get<Roomtype>(this.baseUrl+"roomtype/all");
  }

}
