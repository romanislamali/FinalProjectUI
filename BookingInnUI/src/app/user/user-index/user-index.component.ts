
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HotelService } from 'src/app/service/hotel.service';

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
  constructor(private hotelService: HotelService, private router: Router){

   }

  ngOnInit() {
    this.location = this.hotelService.getAllLocation();
  }


  id?: any;
  getLid(value: any) {
    this.id = value;
    console.log(this.id)
  }



  hotelList?: any;
  onSubmit() {
    this.hotelList = this.hotelService.getAllHotelByLocation(this.id);
    this.hotelListCard =true;
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


  hotleId? :any;
  roomList? :any;

  public getHotelId(value: any){
    
    this.hotleId = value;
    this.roomList = this.hotelService.getAllRoomByHotelId(this.hotleId);
    this.roomListCard = true;
    this.hotelListCard = false;
    // this.router.navigate(['availableroom/',value])
    console.log(this.hotleId);
    console.log(this.roomList.rtitle);

  }


  bookRoom(){

  }

}
