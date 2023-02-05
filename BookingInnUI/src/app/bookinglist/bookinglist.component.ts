import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BookingService } from '../service/booking.service';

@Component({
  selector: 'app-bookinglist',
  templateUrl: './bookinglist.component.html',
  styleUrls: ['./bookinglist.component.css']
})
export class BookinglistComponent {


  //   constructor(private hotelService: HotelService, 
  //     private bookingservice : BookingService, 
  //     private router: Router){
  // }
  
    constructor(private httpClient:HttpClient, private bookingService : BookingService, private router : Router){}
    
   
  
    booking:any;
  
  
  
    userId?: any;
    getLid(value: any) {
      this.userId = value;
      // console.log(this.locationId);
    }
  
  
  
    booklist?: any;
    onSubmit() {
      this.booklist = this.bookingService.getBookDtlByUser(1);
    }
  
  
  
  
  }
