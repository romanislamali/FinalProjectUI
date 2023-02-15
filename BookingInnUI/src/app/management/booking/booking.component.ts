import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BookingService } from 'src/app/service/booking.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent {

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
