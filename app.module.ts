import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from'@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { NewuserComponent } from './newuser/newuser.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { EditComponent } from './edit/edit.component';
@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    NewuserComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
