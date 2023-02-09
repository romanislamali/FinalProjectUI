
import { Component, OnInit } from '@angular/core';
import { Booking } from 'src/app/model/booking.model';
import { User } from 'src/app/model/user.model';
import { BookingService } from 'src/app/service/booking.service';
import { HotelService } from 'src/app/service/hotel.service';
import { RoomService } from 'src/app/service/room.service';

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
  constructor(
    private hotelService: HotelService,
    private roomService: RoomService,
    private bookingservice: BookingService,
    ) {
  }

  ngOnInit() {
    this.location = this.hotelService.getAllLocation();
  }


  locationId?: any;
  getLid(value: any) {
    this.locationId = value;
  }



  hotelList?: any;
  onSubmit() {
    this.hotelList = this.hotelService.getAllHotelByLocation(this.locationId);
    this.hotelListCard = true;
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


  hotelId?: any;
  roomList: any[]=[];

  public getAvailableRoomByHotelId(value: any) {
    this.hotelId = value;
    this.roomService.getAllRoomByHotelId(this.hotelId).subscribe(
      data=>{
        this.roomList=data
        this.roomList=this.roomList.filter(rl=>rl.rstatus!=1)
      }
    )
    this.roomListCard = true;
    this.hotelListCard = false;

  }

 booking: Booking = new Booking();
  user: User = new User();
  roomId?: any;
  userid: number = 1;

  bookRoom(value: any) {
    this.roomId = value;

    this.booking.bdate = "date";
    this.booking.lid = this.locationId;
    this.booking.hid = this.hotelId;
    this.booking.rid = this.roomId;
    this.booking.uid = this.userid;


    this.bookingservice.createbooking(this.booking).subscribe(
      (data) => {
        alert('Booking successfully');
      },
      (error) => {
        alert('Something wrong, try again ');
      }
    )

    this.roomService.blockBookedRoom(this.roomId).subscribe(
      data=>console.log(data)
    )
    // console.log(this.roomId)
    
  }

  sendAllIdToLoginTs() {
    console.log(this.locationId);
    console.log(this.hotelId);
    console.log(this.roomId);
  }

}
