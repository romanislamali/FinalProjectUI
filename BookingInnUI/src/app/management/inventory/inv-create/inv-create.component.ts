import { HttpClient } from '@angular/common/http';
import { Component,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Inventory } from 'src/app/model/inventory.model';
import { InventoryService } from 'src/app/service/inventory.service';

@Component({
  selector: 'app-inv-create',
  templateUrl: './inv-create.component.html',
  styleUrls: ['./inv-create.component.css']
})
export class InvCreateComponent implements OnInit{
  Inventory: Inventory = new Inventory();
  submitted=false;

  constructor(
    private invservice : InventoryService,
    private httpClient:HttpClient,
    private router:Router) { }

  ngOnInit(): void {
  }

  inventoryAdd() {
    this.submitted = true;
    this.invservice.createInventory(this.Inventory).subscribe(
      data => alert('Inventory added successfull!!'),
       error => alert('Something is wrong, please try again!!')    
    );  
   
  }

}
