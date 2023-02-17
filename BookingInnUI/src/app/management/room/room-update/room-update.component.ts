import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Room } from 'src/app/model/room.model';
import { RoomService } from 'src/app/service/room.service';

@Component({
  selector: 'app-room-update',
  templateUrl: './room-update.component.html',
  styleUrls: ['./room-update.component.css']
})
export class RoomUpdateComponent {


  constructor(
    private roomService : RoomService,
    private route: ActivatedRoute,
    private router: Router
    // private hotelService : HotelService
    ) { }
    id: number = 0;
    room : Room = new Room();

    ngOnInit(): void {
      this.id = this.route.snapshot.params['id'];
      // this.hotelService.getAllHotelFacilities();
      this.roomService.findRoomById(this.id).subscribe(
        data => {
          this.room = data;
        }
      );
    }


   
    hotelListCard: boolean = false;
    roomListCard: boolean = false;
    hotelId?:any;
    hotel:any;

   
    getHid(value:any){
      this.hotelId=value;
    }


    hotelList?: any;
  // hotels: Hotel = new Hotel();
 
  submitted:boolean=false;
  roomUpdate(){
   

  }


  updateroom(){
    this.roomService.updateRoom(this.id, this.room).subscribe(
      data => alert('Hotel facilities update successfull!!'),
       error => alert('Something is wrong, please try again!!'));
      //  this.ngOnInit();
    this.router.navigate(['/allroom']);
    
  }


}
