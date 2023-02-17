import { Component } from '@angular/core';
import { Hotel } from 'src/app/model/hotel.model';
import { Room } from 'src/app/model/room.model';
import { HotelService } from 'src/app/service/hotel.service';
import { RoomService } from 'src/app/service/room.service';

@Component({
  selector: 'app-room-create',
  templateUrl: './room-create.component.html',
  styleUrls: ['./room-create.component.css']
})
export class RoomCreateComponent {
  constructor(
    private roomService : RoomService,
    private hotelService : HotelService
    ) { }
    ngOnInit() {
      this.location = this.hotelService.getAllLocation();
      this.hotelList = this.hotelService.getAllHotelByLocation(this.locationId);
    }


    location: any;
    locationId?: any;
    hotelListCard: boolean = false;
    roomListCard: boolean = false;
    hotelId?:any;
    hotel:any;

    getLid(value: any) {
      this.locationId = value;
    }
    getHid(value:any){
      this.hotelId=value;
    }


    hotelList?: any;
  searchHotel() {

   
    this.hotelList = this.hotelService.getAllHotelByLocation(this.locationId);
    this.hotelListCard = true;
    this.roomListCard = false;
  
  }

   
  
  hotels: Hotel = new Hotel();
room : Room = new Room();
submitted:boolean=false;
  roomAdd(){
    this.submitted = true;
    this.room.hid_fk=this.locationId;
    console.log(this.locationId);
    this.roomService.createRoom(this.room).subscribe(
      data => alert('Room added successfull!!'),
      
       error => alert('Something is wrong, please try again!!')  
         
    );  
    console.log(this.hotelList);
  }


}
