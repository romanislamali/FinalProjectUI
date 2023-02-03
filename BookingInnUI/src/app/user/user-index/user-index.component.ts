
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Booking } from 'src/app/model/booking.model';
import { User } from 'src/app/model/user.model';
import { BookingService } from 'src/app/service/bookingservice.service';
import { HotelService } from 'src/app/service/hotel.service';

@Component({
  selector: 'app-user-index',
  templateUrl: './user-index.component.html',
  styleUrls: ['./user-index.component.css']
})
export class UserIndexComponent {

 
  persontab: boolean = false;
  hotelListCard: boolean = false;
  roomListCard: boolean = false;

  public valueadult: number = 1;
  public valuechildren = 0;
  public valueroom = 1;

  //  --------------show adult, children, room card-------------
  hotel: any;
  location: any;
  constructor(private hotelService: HotelService, private bookingservice : BookingService, private router: Router){

   }

  ngOnInit() {
    this.location = this.hotelService.getAllLocation();
  }


  locationId?: any;
  getLid(value: any) {
    this.locationId = value;
    // console.log(this.locationId);
  }



  hotelList?: any;
  onSubmit() {
    this.hotelList = this.hotelService.getAllHotelByLocation(this.locationId);
    this.hotelListCard =true;
    this.roomListCard = false;

  }

 
  onclick() {
    this.persontab = !this.persontab
  }

  // increment and decrememt adult, childern and room count

  public adultcount(str: String) {
    if ((this.valueadult >= 1) && (this.valueadult < 10)) {

      (str === 'add') ? this.valueadult++ : this.valueadult--;

    }
  }

  public childrencount(str: String) {
    if ((this.valuechildren >= -1) && (this.valuechildren < 10)) {
      (str === 'add') ? this.valuechildren++ : this.valuechildren--;
    }
  }

  public roomcount(str: String) {
    if ((this.valueroom >= 1) && (this.valueroom < 10)) {
      (str === 'add') ? this.valueroom++ : this.valueroom--;
    }
  }


  hotelId? :any;
  roomList? :any;

  public getHotelId(value: any){
    
    this.hotelId = value;
    this.roomList = this.hotelService.getAllRoomByHotelId(this.hotelId);
    this.roomListCard = true;
    this.hotelListCard = false;
    // this.router.navigate(['availableroom/',value])
    // console.log(this.hotelId);
    // console.log(this.roomList.rtitle);

  }
  booking: Booking = new Booking();
  user: User = new User();
  roomId? :any;

  userid:any = 1;
  
  bookRoom(value:any){
    this.roomId=value;
    console.log(this.locationId);
    console.log(this.hotelId);
    console.log(this.roomId);
    console.log(this.userid);

    this.booking = this.locationId;
    this.booking = this.hotelId;
    this.booking = this.roomId;
    this.booking = this.userid;
   
      // console.log(this.booking)
    this.bookingservice.createbooking(this.booking).subscribe(

      (data)=>{
        console.log(data);
        alert('Booking successfully');
       
      }, (error)=>{
        console.log(error);
        alert('Something wrong, try again ');
        

      }
      
    )

   



  }




  sendAllIdToLoginTs(){
    console.log(this.locationId);
    console.log(this.hotelId);
    console.log(this.roomId);
  }

}
