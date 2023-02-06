import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HotelFacilitiesComponent } from 'src/app/management/hotel-facilities/hotel-facilities.component';
import { BookingService } from 'src/app/service/booking.service';
import { HotelService } from 'src/app/service/hotel.service';
import { LocationService } from 'src/app/service/location.service';
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {


  constructor(private router: Router,
             private hotelService: HotelService,
              private bookingService:BookingService,
              private locationService: LocationService
              ) { }


  locationbtntab: boolean = false;
  hotelbtntab: boolean = false;
  roombtntab: boolean = false;
  sidebertab: boolean = true;
  hoteltabletab: boolean = false;
  booklist:boolean=false;
  bookbtntab: boolean = false;
  hotelList: boolean = false;
  hotelFacilitieslist: boolean = false;

  ngOnInit(): void {
  }

  showHotel() {
    this.hotelbtntab = true;
    this.roombtntab = false;
    this.locationbtntab = false;
    this.booklist = false;
    this.bookbtntab=false;
  }

  
  showHotelList() {
    this.hotelList = true;
    
  }
  showHotelFacilitiesList() {
    // this.hotelFacilities.showHFList();
    this.hotelFacilitieslist = true;   
  }

  showRoom() {
    this.roombtntab = true;
    this.hotelbtntab = false;
    this.locationbtntab = false;
    this.bookbtntab=false;
  }

  showLocation() {
    this.locationbtntab = true;
    this.roombtntab = false;
    this.hotelbtntab = false;
    this.booklist = false;
    this.bookbtntab=false;
  }

  showUser() {
    this.router.navigateByUrl("/acourse");

  }


  showBook() {
    this.bookbtntab = true;
    this.hotelbtntab = false;
    this.roombtntab = false;
    this.locationbtntab = false;
    this.hoteltabletab = false;
  }

  showHotelFacilitiesBtn(){
    this.hotelFacilitieslist = true;
    this.bookbtntab = false;
    this.hotelbtntab = false;
    this.roombtntab = false;
    this.locationbtntab = false;
    this.hoteltabletab = false;
  }



public userId:number=1;
booklists?: any;

  showBookList() {
    this.booklist = true;
    this.booklists = this.bookingService.getBookDtlByUser(this.userId);
    
  }



  // -------------------------------


  locationshow : boolean = false;
  showLocationList(){
    this.locationshow=true;  
  }







}
