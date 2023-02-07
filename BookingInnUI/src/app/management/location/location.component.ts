import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiResponse } from 'src/app/model/api.response';
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
    private route:ActivatedRoute,
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

   deleteLocation(lid:number){
    this.locationService.deleteLocationById(lid).subscribe(
      data=>{alert('Location delete successfull!!');  
      this.listofLocation();
    },
     error =>alert('Something is wrong, Please try agin!!')
    );
   }

// -------------------------working on update---------------

  //  id: number = 0;
  //  locations: Location = new Location();
  //  apiResponse: ApiResponse | undefined;

  //  ngOnInit(): void {
  //   this.locations=new Location();
  //   this.id=this.route.snapshot.params['id'];
  //   this.locationService.getLocationById(this.id).subscribe(

  //     data=>{
  //       console.log(data)
  //       this.locations=data;
  //     }
  //   );


  // }

  
  // onupdateLocation(){
  //   this.locationService.updateLocation(this.id,this.locations).subscribe(
  //     data=>console.log(data),error=> console.error()
  //   );
  //   this.locations=new Location();
  //   this.listofLocation();
  // }


  //  updateLocation(lid:number){  
  //     this.router.navigate(['updatestudent/',lid]);
  //    }
 

}
