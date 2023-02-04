import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit{
  constructor(private router:Router) { }

  hotelbtntab: boolean = false;
  sidebertab: boolean = true;

  ngOnInit(): void {
  }

  showHotel(){
    this.hotelbtntab =true;
  }

  faculties(){
    this.router.navigateByUrl("/afaculties");
  }

  staff(){
    this.router.navigateByUrl("/astaff");
  }

  courses(){
    this.router.navigateByUrl("/acourse");
  }
}
