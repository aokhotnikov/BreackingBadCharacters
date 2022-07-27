import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewUserPage } from './view-user.page';

import { IonicModule } from '@ionic/angular';

import { ViewUserPageRoutingModule } from './view-user-routing.module';
import { UserModule } from '../../user/user.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ViewUserPageRoutingModule,
    UserModule
  ],
  declarations: [ViewUserPage]
})
export class ViewUserPageModule {}
