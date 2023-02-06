import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Hotelfacilities } from 'src/app/model/hotelfacilities.model';
import { HotelService } from 'src/app/service/hotel.service';

@Component({
  selector: 'app-hotel-facilities',
  templateUrl: './hotel-facilities.component.html',
  styleUrls: ['./hotel-facilities.component.css']
})
export class HotelFacilitiesComponent {
  constructor(private hotelService : HotelService){}
    
    facilitiesList: boolean = false;
    addform: boolean = false;

  openForm(){
    this.facilitiesList =false;
    this.addform =true;
  }

  public hf = new Hotelfacilities();

  hFacilitiesAdd(){
    this.hotelService.createFacilities(this.hf).subscribe(
      data =>alert('New facilities added successfull!!'),
       error =>alert('Something wrong, please try again!!')
    );
  }
  
  hotelFacilitiesList?: any;
  ngOnInit() {
    this.addform =false;
    this.facilitiesList =true;
    this.hotelFacilitiesList = this.hotelService.getAllHotelFacilities();
    console.log(this.hotelFacilitiesList.hfacid);
  }

  deleteHotelFacilities(id:number){
    this.hotelService.deleteFacilities(id).subscribe(
      data =>{alert('Facilities deleted!!');
      this.hotelService.getAllHotelFacilities();
    },
    error=>alert('Something is wrong!!')
    );
  }

  facId?:any;
  facById?:any;
  updateHotelFacilities(value:any){
    this.facilitiesList= false;
    this.addform =true;
    this.facId= value;
    this.facById = this.hotelService.updateFacilities(this.facId);
  }

  clear(){
    this.hf.hfacname='';
    this.hf.hfacdiscription='';
    this.hf.hfackeyword='';
  }

}
