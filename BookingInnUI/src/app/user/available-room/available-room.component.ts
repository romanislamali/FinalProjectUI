import { Component } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { HotelService } from 'src/app/service/hotel.service';
import { RoomService } from 'src/app/service/room.service';

@Component({
  selector: 'app-available-room',
  templateUrl: './available-room.component.html',
  styleUrls: ['./available-room.component.css']
})
export class AvailableRoomComponent {

  constructor(private roomService: RoomService, private router :Router, private route :ActivatedRoute ){

  }

  roomByHid?: any;

  ngOnInit() {
    this.roomByHid =this.route.snapshot.params['id'];
    this.roomService.getAllRoomByLocationId(this.roomByHid);
    console.log(this.roomByHid)
  }


}
