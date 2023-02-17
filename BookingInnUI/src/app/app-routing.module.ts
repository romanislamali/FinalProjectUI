import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { LoginComponent } from './login/login.component';
import { HfCreateComponent } from './management/hotel-facilities/hf-create/hf-create.component';
import { HfListComponent } from './management/hotel-facilities/hf-list/hf-list.component';
import { HfUpdateComponent } from './management/hotel-facilities/hf-update/hf-update.component';
import { InvCreateComponent } from './management/inventory/inv-create/inv-create.component';
import { InvListComponent } from './management/inventory/inv-list/inv-list.component';
import { InvUpdateComponent } from './management/inventory/inv-update/inv-update.component';
import { LocationComponent } from './management/location/location.component';
import { RoomCreateComponent } from './management/room/room-create/room-create.component';
import { RoomListComponent } from './management/room/room-list/room-list.component';
import { RoomUpdateComponent } from './management/room/room-update/room-update.component';
import { UserIndexComponent } from './user/user-index/user-index.component';
const routes: Routes = [
{path:'', component:UserIndexComponent},
{path: 'admindash', component:AdminDashboardComponent},
{path:'login', component:LoginComponent},
{path:'location', component:LocationComponent},
{path:'createfacilities', component:HfCreateComponent},
{path:'allfacilities', component:HfListComponent},
{path:'updatefacilities', component:HfUpdateComponent},
{path:'updatefacilities/:id', component:HfUpdateComponent},
{path:'createinventory', component:InvCreateComponent},
{path:'allinventory', component:InvListComponent},
{path:'updateinventory', component:InvUpdateComponent},
{path:'createroom', component:RoomCreateComponent},
{path:'allroom', component:RoomListComponent},
{path:'updateallroom', component:RoomUpdateComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
