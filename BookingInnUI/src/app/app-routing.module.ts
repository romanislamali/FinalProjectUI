import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';

import { LoginComponent } from './login/login.component';
import { HotelComponent } from './management/hotel/hotel.component';
import { AvailableRoomComponent } from './user/available-room/available-room.component';
import { UserIndexComponent } from './user/user-index/user-index.component';


const routes: Routes = [
{path:'', component:UserIndexComponent},
{path:'availableroom/:id', component:AvailableRoomComponent},
{path: 'admindash', component:AdminDashboardComponent},
{path:'login', component:LoginComponent},
<<<<<<< HEAD

=======
{path:'allhotel', component:HotelComponent}
>>>>>>> 2a9a4b11c470ea47621f0202f72fc757c8254c11

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
