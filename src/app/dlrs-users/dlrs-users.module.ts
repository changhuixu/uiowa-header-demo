import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { DlrsUsersRoutingModule } from './dlrs-users-routing.module';


@NgModule({
  imports: [
    CommonModule,
    DlrsUsersRoutingModule
  ],
  declarations: [UsersComponent]
})
export class DlrsUsersModule { }
