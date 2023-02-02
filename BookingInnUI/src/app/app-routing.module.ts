import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AvailableRoomComponent } from './user/available-room/available-room.component';
import { UserIndexComponent } from './user/user-index/user-index.component';


const routes: Routes = [
{path:'', component:UserIndexComponent},
{path:'availableroom/:id', component:AvailableRoomComponent},
{path: 'admindash', component:AdminDashboardComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
