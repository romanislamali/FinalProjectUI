import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit{
  constructor(private router:Router) { }

  locationbtntab: boolean = false;
  hotelbtntab: boolean = false;
  roombtntab: boolean = false;
  sidebertab: boolean = true;

  ngOnInit(): void {
  }

  showHotel(){
    this.hotelbtntab =true;
    this.roombtntab=false;
    this.locationbtntab= false;
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
