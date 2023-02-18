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
    
    activeRoomBtn: boolean = true;
    dactiveRoomBtn: boolean = true;
   

     
  
    ngOnInit(){
      this.getAllRoomList();
    }

    roomList:any;
    
    getAllRoomList(){
      this.roomService.getAllRoom().subscribe(
        data => {
          this.roomList=data;
          console.log(data)
        }
      );
      
    }
  
  
    updateRoom(id: number){
      this.router.navigate(['updateroom/',id]);
    }

    deleteRoom(id: number){
      this.roomService.deleteRoom(id).subscribe(
        data=>{alert('Room successfully deleted!!');
        this.ngOnInit();   
        },
        error=>alert('Somethig wrong, please try again!!')      
        );        
    }

    activeRoom(id:number){
      this.roomService.activeRoom(id).subscribe();
    }

    dactiveRoom(id:number){
      this.roomService.dactiveRoom(id).subscribe();
    }
}
