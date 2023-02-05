import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HotelService } from 'src/app/service/hotel.service';
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit{
  constructor(private router:Router, private hotelService: HotelService) { }

  locationbtntab: boolean = false;
  hotelbtntab: boolean = false;
  roombtntab: boolean = false;
  sidebertab: boolean = true;
  hoteltabletab: boolean = false;

  ngOnInit(): void {
  }

  showHotel(){
    this.hotelbtntab =true;
    this.roombtntab=false;
    this.locationbtntab= false;
  }

   hotelList?:any;
  showHotelList(){
    this.hotelList= this.hotelService.getAllHotel();
    this.hotelbtntab =false;
    this.roombtntab=false;
    this.locationbtntab= false;
    this.hoteltabletab= true;
  }

  showRoom(){
    this.roombtntab=true;
    this.hotelbtntab =false;
    this.locationbtntab= false;
  }

  showLocation(){
    this.locationbtntab=true;
    this.roombtntab=false;
    this.hotelbtntab =false;
  }

  showUser(){
    this.router.navigateByUrl("/acourse");
  }
}
