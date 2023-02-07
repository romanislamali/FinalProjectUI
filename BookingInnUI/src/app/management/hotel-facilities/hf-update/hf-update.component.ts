import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiResponse } from 'src/app/model/api.response';
import { Hotelfacilities } from 'src/app/model/hotelfacilities.model';
import { HotelService } from 'src/app/service/hotel.service';

@Component({
  selector: 'app-hf-update',
  templateUrl: './hf-update.component.html',
  styleUrls: ['./hf-update.component.css']
})
export class HfUpdateComponent implements OnInit{
  hfacid: number = 0;
  hf: Hotelfacilities = new Hotelfacilities();
  apiResponse: ApiResponse | undefined;


  constructor(private hotelService: HotelService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.hf = new Hotelfacilities();
    this.hfacid = this.route.snapshot.params['hfacid'];
    this.hotelService.getFacilitiesByID(this.hfacid).subscribe(
      data => {
        console.log(data)
        this.hf = data;
      }
    );

  }

  updateFacilities(){
    this.hotelService.updateHFacilities(this.hfacid, this.hf).subscribe(
      data => console.log(data), error => console.error());
    this.hf = new Hotelfacilities();
    // this.router.navigate(['/allstudent']);
    // setTimeout(() => {
    //   setTimeout(() => {
    //     this.router.navigate(["/allfacilities"]);
    //   });
    // }, 1000);
  }

}
