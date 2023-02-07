import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { LoginComponent } from './login/login.component';
import { HfCreateComponent } from './management/hotel-facilities/hf-create/hf-create.component';
import { HfListComponent } from './management/hotel-facilities/hf-list/hf-list.component';
import { HfUpdateComponent } from './management/hotel-facilities/hf-update/hf-update.component';
import { HotelComponent } from './management/hotel/hotel.component';
import { InvCreateComponent } from './management/inventory/inv-create/inv-create.component';
import { InvListComponent } from './management/inventory/inv-list/inv-list.component';
import { InvUpdateComponent } from './management/inventory/inv-update/inv-update.component';
import { LocationComponent } from './management/location/location.component';
import { AvailableRoomComponent } from './user/available-room/available-room.component';
import { UserIndexComponent } from './user/user-index/user-index.component';
const routes: Routes = [
{path:'', component:UserIndexComponent},
{path:'availableroom/:id', component:AvailableRoomComponent},
{path: 'admindash', component:AdminDashboardComponent},
{path:'login', component:LoginComponent},
{path:'allhotel', component:HotelComponent},
{path:'location', component:LocationComponent},
{path:'createfacilities', component:HfCreateComponent},
{path:'allfacilities', component:HfListComponent},
{path:'updatefacilities', component:HfUpdateComponent},
{path:'createinventory', component:InvCreateComponent},
{path:'allinventory', component:InvListComponent},
{path:'updateinventory', component:InvUpdateComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
