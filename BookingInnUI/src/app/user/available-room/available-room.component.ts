import { Component } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-available-room',
  templateUrl: './available-room.component.html',
  styleUrls: ['./available-room.component.css']
})
export class AvailableRoomComponent {

  constructor(private router :Router, private route :ActivatedRoute ){

  }

  roomByLid?: any;

  ngOnInit() {
    this.roomByLid =this.route.snapshot.params['id'];
    console.log("this is hotel id for get room list"+this.roomByLid)
  }

}
