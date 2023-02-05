import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { HotelService } from 'src/app/service/hotel.service';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent {

  constructor(private router:Router, private hotelService: HotelService) { }

  // hoteltabletab: boolean = false;

  hotelList?:any;
  showHotelList(){
    this.hotelList= this.hotelService.getAllHotel();

    // this.hoteltabletab= true;
  }

}
