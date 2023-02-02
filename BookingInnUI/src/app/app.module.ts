import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { HotellistComponent } from './admin/hotellist/hotellist.component';
import { RoomlistComponent } from './admin/roomlist/roomlist.component';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UserIndexComponent } from './user/user-index/user-index.component';
import { HeaderComponent } from './header/header.component';
import { AvailableRoomComponent } from './user/available-room/available-room.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HotellistComponent,
    RoomlistComponent,
    UserIndexComponent,
    AvailableRoomComponent,
    AdminDashboardComponent
   
    
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
