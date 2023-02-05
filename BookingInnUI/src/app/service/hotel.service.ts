import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hotel } from '../model/hotel.model';
import { Hotelfacilities } from '../model/hotelfacilities.model';
import { Location } from '../model/location.model';
import { Room } from '../model/room.model';

@Injectable({
  providedIn: 'root'
})
export class HotelService {


  baseUrl:string = "http://localhost:8085/";


  constructor(private httpClient : HttpClient) { }


  getAllHotelByLocation(lid:number):Observable<Hotel>{

    return this.httpClient.get<Hotel>(this.baseUrl+"hotelbylocationid/"+lid);

   }

   
   getAllLocation():Observable<Location>{
    return this.httpClient.get<Location>(this.baseUrl+"location/all");
   }

   getAllHotel():Observable<Hotel>{
    return this.httpClient.get<Hotel>(this.baseUrl+"hotel/all");
   }

   getAllRoomByHotelId(hid:number): Observable<any>{

    return this.httpClient.get<any>(this.baseUrl+"roombyhotelid/"+hid);

   }


  
}
