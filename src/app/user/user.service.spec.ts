import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { UserService } from './user.service';
import { Status, User } from './interfaces/user.interface';

describe('UserService', () => {
  let userSrv: UserService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });

    httpTestingController = TestBed.inject(HttpTestingController);
    userSrv = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(userSrv).toBeTruthy();
  });

  it('getUsers() should return array of users', () => {
    const mockUsers: User[] = [
      {
        char_id: 1,
        name: 'Walter White',
        birthday: '09-07-1958',
        occupation: [
          'High School Chemistry Teacher',
          'Meth King Pin'
        ],
        img: 'https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg',
        status: Status.PresumedDead,
        nickname: 'Heisenberg',
        appearance: [1, 2, 3, 4, 5],
        portrayed: 'Bryan Cranston',
        category: 'Breaking Bad',
        better_call_saul_appearance: []
      }
    ];
    userSrv.getUsers().subscribe((response) => expect(response.length).toBeGreaterThan(0));

    const req = httpTestingController.expectOne('https://breakingbadapi.com/api/characters');

    expect(req.request.method).toBe('GET');

    req.flush(mockUsers);
  });

  afterEach(() => httpTestingController.verify());
});
