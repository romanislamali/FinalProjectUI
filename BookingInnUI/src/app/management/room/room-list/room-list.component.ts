import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoomService } from 'src/app/service/room.service';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit{
  constructor( 
    private roomService : RoomService,
    private router:Router
    ){}
  
    roomList?: any;
  
    ngOnInit(){
    this.roomList = this.roomService.getAllRoom();
    }
  
    rid? : any;

    deleteroom(id: number){
      this.roomService.deleteRoom(id).subscribe(
        data=>{alert(' room successfully deleted!!'); 
          this.ngOnInit(); 
        },
        error=>alert('Somethig wrong, please try again!!')      
        );         
    }


    // deleteHotelFacilities(id: number){
    //   this.roomService.deleteFacilities(id).subscribe(
    //     data=>{alert('Hotel Facilities successfully deleted!!'); 
    //       this.ngOnInit(); 
    //     },
    //     error=>alert('Somethig wrong, please try again!!')      
    //     );         
    // }
  
    // updateHotelFacilities(id: number){
    //   this.router.navigate(['updatefacilities/',id]);
    // }

  





}
