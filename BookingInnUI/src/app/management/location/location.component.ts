import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from 'src/app/model/location.model';
import { BookingService } from 'src/app/service/booking.service';
import { HotelService } from 'src/app/service/hotel.service';
import { LocationService } from 'src/app/service/location.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent {

  constructor(private router: Router,
    private hotelService: HotelService,
    private bookingService: BookingService,
    private locationService: LocationService
  ) { }
  locationlist?: any;
  location: Location = new Location();
  listofLocation() {
    this.showform=false;
    this.locationlist = this.locationService.getAllLocation();
    this.listshow=true;
  }


  listshow:boolean=false;

  showform: boolean=false;
  addlocation(){
      this.showform=true;
      this.listshow=false;
  }


  submitted = false;
  onSubmit() {
    this.submitted=true;
    this.locationService.createlocation(this.location).subscribe(
      (data) => {
        console.log(data);
        alert('added successfully');
      },
      (error) => {
        console.log(error);
        alert('Something wrong, try again ');
      }
    )

   }



   deleteStudent(lid:number){

    // this.studentService.deleteStudent(id).subscribe(
    //   data=>{console.log(data);
    //   this.students=this.studentService.getAllStudent;
     
    // },
    // error=> console.error(error)
    
    // );

    this.locationService.deleteLocationbyid(lid).subscribe(
      data=>{console.log(data);
      this.locationlist = this.locationService.getAllLocation();},
      error=>console.error(error)
      
    );


   }


  

}
