import { Pipe, PipeTransform } from '@angular/core';
import { User } from './interfaces/user.interface';

type keyOfUser = keyof User;

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {

  transform(arr: User[], field: keyOfUser, value: string): User[] {
    if (!(field && value)) {
      return arr;
    }

    const val = value.toLowerCase();
    return arr.filter(user => user[field].toString().toLowerCase().includes(val));
  }
}
