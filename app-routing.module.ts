import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from './edit/edit.component';
import { NewuserComponent } from './newuser/newuser.component';
import { UsersComponent } from './users/users.component';
const routes: Routes = [
  {path:'', redirectTo:'/users',pathMatch:'full'},
  {path:'newuser',component:NewuserComponent},
  {path:'users',component:UsersComponent},
  {path:'edit/:id',component:EditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
