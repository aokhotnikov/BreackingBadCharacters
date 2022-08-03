import { Component, OnInit } from '@angular/core';

import { UserService } from '../../user/user.service';
import { StorageService } from '../../services/storage.service';
import { User } from '../../user/interfaces/user.interface';
import { DisplayEventsService } from '../../services/display-events.service';

@Component({
  selector: 'app-user-list',
  templateUrl: 'user-list.page.html',
  styleUrls: ['user-list.page.scss'],
})
export class UserListPage implements OnInit {
  filterName: string;
  filterSeason: string;

  constructor(
    private userSrv: UserService,
    private deSrv: DisplayEventsService,
    public store: StorageService
  ) {
  }

  ngOnInit() {
    this.deSrv.runWithLoading(this.userSrv.getUsers()).subscribe(res => this.store.users = res);
  }

  trackItems(index: number, itemObject: User) {
    return itemObject.char_id;
  }
}
