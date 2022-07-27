import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { UserComponent } from './component/user.component';
import { FilterPipe } from './filter.pipe';

@NgModule({
  imports: [CommonModule, IonicModule, RouterModule],
  declarations: [UserComponent, FilterPipe],
  exports: [UserComponent, FilterPipe]
})
export class UserModule {
}
