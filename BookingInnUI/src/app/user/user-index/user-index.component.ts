
import { Component, OnInit } from '@angular/core';
import { Booking } from 'src/app/model/booking.model';
<<<<<<< HEAD
=======
import { Hotel } from 'src/app/model/hotel.model';
import { Location } from 'src/app/model/location.model';
import { Room } from 'src/app/model/room.model';
>>>>>>> da1c3fb48a559ffa7dadce1b78756b25146f1442
import { User } from 'src/app/model/user.model';
import { BookingService } from 'src/app/service/booking.service';
import { HotelService } from 'src/app/service/hotel.service';
import { LocationService } from 'src/app/service/location.service';
import { RoomService } from 'src/app/service/room.service';

@Component({
  selector: 'app-user-index',
  templateUrl: './user-index.component.html',
  styleUrls: ['./user-index.component.css']
})
export class UserIndexComponent {

<<<<<<< HEAD


=======
>>>>>>> da1c3fb48a559ffa7dadce1b78756b25146f1442
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
    private locationService: LocationService,
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
  searchHotel() {
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
  roomList: any[] = [];

  public getAvailableRoomByHotelId(value: any) {
    this.hotelId = value;
    this.roomService.getAllRoomByHotelId(this.hotelId).subscribe(
      data => {
        this.roomList = data
        this.roomList = this.roomList.filter(rl => rl.rstatus != 1)
      }
    )
    this.roomListCard = true;
    this.hotelListCard = false;
  }

<<<<<<< HEAD
  booking: Booking = new Booking();
  user: User = new User();
=======
>>>>>>> da1c3fb48a559ffa7dadce1b78756b25146f1442
  roomId?: any;
  userid: number = 1;

  // hotelnames?: any;

  bookingRoom(value:any){  
    this.roomId = value;
<<<<<<< HEAD

    // this.booking.bdate = ;
    // this.booking.hotelname = this.hotelnames;
    // this.booking.hotelname = this.hotelId;
    // this.booking.rid = 
    // this.booking.uid = this.userid;
=======
    this.confirmBooking();
  }

  booking: Booking = new Booking();
  loc: Location = new Location();
  hot: Hotel = new Hotel();
  room: Room = new Room();
  user: User = new User();

  confirmBooking() {
    this.roomService.getRoomById(this.roomId).subscribe(
      data => {
        this.room = data;
      }
    );
    this.locationService.getLocationById(this.locationId).subscribe(
      data => {
        this.loc = data;
      }
    )
    this.hotelService.getHotelById(this.hotelId).subscribe(
      data => {
        this.hot = data;
      }
    )
>>>>>>> da1c3fb48a559ffa7dadce1b78756b25146f1442

    this.booking.roomnumber = this.room.rnumber;
    this.booking.location = this.loc.lname;
    this.booking.hotelname = this.hot.hname;
    this.booking.hoteladdress = this.hot.haddress;

    this.bookingservice.createbooking(this.booking).subscribe(
      (data) => {
        alert('Booking successfully');
       
      },
      (error) => {
        alert('Something wrong, try again ');
      }
    )

    this.roomService.blockBookedRoom(this.roomId).subscribe(
      
    )
    // window.location.reload();
  }

  sendAllIdToLoginTs() {
    console.log(this.locationId);
    console.log(this.hotelId);
    console.log(this.roomId);
  }
}
