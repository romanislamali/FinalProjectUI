import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { InventoryService } from 'src/app/service/inventory.service';

@Component({
  selector: 'app-inv-list',
  templateUrl: './inv-list.component.html',
  styleUrls: ['./inv-list.component.css']
})
export class InvListComponent {
  constructor(
    private httpClient:HttpClient, 
    private inventoryService : InventoryService,
    private router:Router
    ){}
  
    inventoryList?: any;
  
    ngOnInit(){
    this.inventoryList = this.inventoryService.getAllInventory();
    }
  
    deleteInventory(id: number){
      this.inventoryService.deleteInventory(id).subscribe(
        data=>{alert('Inventory successfully deleted!!');   
          // this.router.navigate(['/allfacilities']); 
          this.ngOnInit(); 
        },
        error=>alert('Somethig wrong, please try again!!')      
        );         
    }
  
    updateInventory(id: number){
      this.router.navigate(['updateinventory/',id]);
    }
}
