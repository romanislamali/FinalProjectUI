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
     
      this.hotel = this.hotelService.getAllHotel();
     
    }


   
    hotelListCard: boolean = false;
    roomListCard: boolean = false;
    hotelId?:any;
    hotel:any;

   
    getHid(value:any){
      this.hotelId=value;
    }


    hotelList?: any;
  

   
  
  hotels: Hotel = new Hotel();
room : Room = new Room();
submitted:boolean=false;
  roomAdd(){
    this.submitted = true;
      this.roomService.createRoom(this.room).subscribe(
      data => alert('Room added successfull!!'),
             error => alert('Something is wrong, please try again!!')  
         
    );  
    console.log(this.hotelList);

this.rooms ;
  }

  rooms : Room = new Room();

}
