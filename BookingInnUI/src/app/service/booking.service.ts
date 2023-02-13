import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Booking } from '../model/booking.model';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  baseUrl: string = "http://localhost:8085/";

  constructor(private httpClient: HttpClient) { }

  public createbooking(booking: any) {
    return this.httpClient.post(`${this.baseUrl}booksave`, booking);
  }

  getAllBooking(): Observable<Booking> {
    return this.httpClient.get<Booking>(this.baseUrl+"booking/all");
  }

  getBookingDetailsByEmail(email: number): Observable<any> {
    return this.httpClient.get<any>(this.baseUrl + "booking/"+email);
  }

}
