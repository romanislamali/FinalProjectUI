
import { Component, OnInit } from '@angular/core';
import { HotelService } from 'src/app/service/hotel.service';

@Component({
  selector: 'app-user-index',
  templateUrl: './user-index.component.html',
  styleUrls: ['./user-index.component.css']
})
export class UserIndexComponent {

  id?: any;
  hotelByLid?: any;

  visible: boolean = false;
  public valueadult: number = 1;
  public valuechildren = 0;
  public valueroom = 1;
  //  --------------show adult, children, room card-------------
  hotel: any;
  location: any;
  constructor(private hotelService: HotelService){

   }

  ngOnInit() {
    this.location = this.hotelService.getAllLocation();
  }

  getLid(value: any) {
    this.id = value;
    console.log(this.id)
  }

  onSubmit() {
    this.hotelByLid = this.hotelService.getAllHotelByLocation(this.id);
    this.visible = false;
    this.btnvisible = !this.btnvisible;
  }


  btnvisible: boolean = false;
  onclick() {
    this.visible = !this.visible
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

  // btnonclick() {
  //   this.visible = false;
  //   this.btnvisible = !this.btnvisible;

  // }

}
