import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { User } from './interfaces/user.interface';
import { DisplayEventsService } from '../services/display-events.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http: HttpClient, private deSrv: DisplayEventsService) {
    console.log('Init UserService');
  }

  public getUsers(): Observable<User[]> {
    return this.deSrv.runWithLoading(
      this.http.get<User[]>('https://breakingbadapi.com/api/characters').pipe(
        catchError(err => {
          console.log(err);
          // todo: add error service to show user the error;
          return of([]);
        })
      )
    );
  }
}
