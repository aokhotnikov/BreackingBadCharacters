import { Injectable } from '@angular/core';
import { User } from '../user/interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private userData: User[] = [];

  constructor() { }

  get users(): User[] {
    return this.userData;
  }

  set users(value: User[]) {
    this.userData = value;
  }
}
