import { Component, OnInit } from '@angular/core';

import { UserService } from '../../user/user.service';
import { StorageService } from '../../services/storage.service';
import { User } from '../../user/interfaces/user.interface';

@Component({
  selector: 'app-user-list',
  templateUrl: 'user-list.page.html',
  styleUrls: ['user-list.page.scss'],
})
export class UserListPage implements OnInit {
  filterName: string;
  filterSeason: string;

  constructor(private userSrv: UserService, public store: StorageService) {
  }

  ngOnInit() {
    this.userSrv.getUsers().subscribe(res => this.store.users = res);
  }

  trackItems(index: number, itemObject: User) {
    return itemObject.char_id;
  }

  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }

}
