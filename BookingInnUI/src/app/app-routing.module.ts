import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { LoginComponent } from './login/login.component';
import { BookingListComponent } from './management/booking/booking-list/booking-list.component';
import { HfCreateComponent } from './management/hotel-facilities/hf-create/hf-create.component';
import { HfListComponent } from './management/hotel-facilities/hf-list/hf-list.component';
import { HfUpdateComponent } from './management/hotel-facilities/hf-update/hf-update.component';
import { InvCreateComponent } from './management/inventory/inv-create/inv-create.component';
import { InvListComponent } from './management/inventory/inv-list/inv-list.component';
import { InvUpdateComponent } from './management/inventory/inv-update/inv-update.component';
import { RoomCreateComponent } from './management/room/room-create/room-create.component';
import { RoomListComponent } from './management/room/room-list/room-list.component';
import { UserIndexComponent } from './user/user-index/user-index.component';
const routes: Routes = [
{path:'', component:UserIndexComponent},
{path: 'admindash', component:AdminDashboardComponent},
{path:'login', component:LoginComponent},
{path:'createfacilities', component:HfCreateComponent},
{path:'allfacilities', component:HfListComponent},
{path:'updatefacilities', component:HfUpdateComponent},
{path:'updatefacilities/:id', component:HfUpdateComponent},
{path:'createinventory', component:InvCreateComponent},
{path:'allinventory', component:InvListComponent},
{path:'updateinventory', component:InvUpdateComponent},
{path:'createroom', component:RoomCreateComponent},
{path:'allroom', component:RoomListComponent},
{path:'allbooking', component:BookingListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
