import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HotelService } from 'src/app/service/hotel.service';

@Component({
  selector: 'app-hf-list',
  templateUrl: './hf-list.component.html',
  styleUrls: ['./hf-list.component.css']
})
export class HfListComponent implements OnInit{

constructor(
  private httpClient:HttpClient, 
  private hotelService : HotelService,
  private router:Router
  ){}

  hotelFacilitiesList?: any;

  ngOnInit(){
  this.hotelFacilitiesList = this.hotelService.getAllHotelFacilities();
  }

  deleteHotelFacilities(id: number){
    this.hotelService.deleteFacilities(id).subscribe(
      data=>{alert('Hotel Facilities successfully deleted!!');   
        // this.router.navigate(['/allfacilities']); 
        this.ngOnInit(); 
      },
      error=>alert('Somethig wrong, please try again!!')      
      );         
  }

  updateHotelFacilities(hfacid: number){
    this.router.navigate(['updatefacilities/',hfacid]);
  }
}
