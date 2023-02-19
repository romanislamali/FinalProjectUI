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

  //  myFunction(value:any) {
  //     var x = document.getElementById("changeStatus");
  //     if (x!.innerHTML === "Active") {        
  //       this.dactiveRoom(value);
  //       x!.innerHTML = "Dactive";
  //     } else {
  //       this.activeRoom(value);
  //       x!.innerHTML = "Active";
  //     }
  //   }  

    activeRoomBtn: boolean = true;
    dactiveRoomBtn: boolean = true;
      

    activeRoom(id:number){
      this.roomService.activeRoom(id).subscribe();
      this.activeRoomBtn=false;
      this.dactiveRoomBtn=true;
    }

    dactiveRoom(id:number){
      this.roomService.dactiveRoom(id).subscribe();
      this.dactiveRoomBtn=false;
      this.activeRoomBtn=true;
    }
}
