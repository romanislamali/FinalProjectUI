import { Component, OnInit } from '@angular/core';
import { Room } from 'src/app/model/room.model';
import { HotelService } from 'src/app/service/hotel.service';
import { RoomFacilitiesService } from 'src/app/service/room-facilities.service';
import { RoomTypeService } from 'src/app/service/room-type.service';
import { RoomService } from 'src/app/service/room.service';

@Component({
  selector: 'app-room-create',
  templateUrl: './room-create.component.html',
  styleUrls: ['./room-create.component.css']
})
export class RoomCreateComponent implements OnInit{
  
  room : Room = new Room();
  constructor(
    private hotelService: HotelService,    
    private roomService: RoomService,
    private roomTypeSercice: RoomTypeService,
    private roomFacilitiesSercice: RoomFacilitiesService
  ) { }


  hotelList:any;
  locationList:any;
  roomType:any;
  roomFacilities:any;

  ngOnInit() {
    this.locationList = this.hotelService.getAllLocation();
    this.roomType = this.roomTypeSercice.getAllRoomType();
    this.roomFacilities = this.roomFacilitiesSercice.getAllRoomFacilities();
    console.log(this.hotelList);
  }

  locationId: any;
  getLid(value: any) {
    console.log(value)
    this.locationId=value;
    this.hotelList = this.hotelService.getAllHotelByLocation(this.locationId);
  }
  
  hotelId:any;
  getHid(value:any){
    console.log(value)
    this.hotelId=value;
  }


  submitted: boolean = false;
  roomAdd() {
    this.submitted = true;
    this.roomService.createRoom(this.room).subscribe(
      data => alert('Room added successfull!!'),

      error => alert('Something is wrong, please try again!!')

    );
    console.log(this.hotelList);
  }


}
