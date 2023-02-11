import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UserIndexComponent } from './user/user-index/user-index.component';
import { HeaderComponent } from './header/header.component';
import { AvailableRoomComponent } from './user/available-room/available-room.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RoomComponent } from './management/room/room.component';
import { BookingComponent } from './management/booking/booking.component';
import { UserComponent } from './management/user/user.component';
import { LocationComponent } from './management/location/location.component';
import { HfListComponent } from './management/hotel-facilities/hf-list/hf-list.component';
import { HfCreateComponent } from './management/hotel-facilities/hf-create/hf-create.component';
import { HfUpdateComponent } from './management/hotel-facilities/hf-update/hf-update.component';
import { SideberComponent } from './sideber/sideber.component';
import { InvCreateComponent } from './management/inventory/inv-create/inv-create.component';
import { InvUpdateComponent } from './management/inventory/inv-update/inv-update.component';
import { RoomtypeComponent } from './management/roomtype/roomtype.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    UserIndexComponent,
    AvailableRoomComponent,
    AdminDashboardComponent,
    LoginComponent,
    RoomComponent,
    BookingComponent,
    UserComponent,
    LocationComponent,
    HfListComponent,
    HfCreateComponent,
    HfUpdateComponent,
    SideberComponent,
    InvCreateComponent,
    InvUpdateComponent,
    RoomtypeComponent

    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
