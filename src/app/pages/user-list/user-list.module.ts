import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { UserListPage } from './user-list.page';
import { UserListPageRoutingModule } from './user-list-routing.module';
import { UserModule } from '../../user/user.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserModule,
    ScrollingModule,
    UserListPageRoutingModule,
  ],
  declarations: [UserListPage]
})
export class UserListPageModule {}
