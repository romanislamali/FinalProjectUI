import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookingService {


  baseUrl: string = "http://localhost:8085";
  constructor(private httpClient: HttpClient) { }

  public createbooking(booking: any) {
    return this.httpClient.post(`${this.baseUrl}/booksave`, booking);

  }






}
