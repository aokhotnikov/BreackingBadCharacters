import { faker, Gender } from '@faker-js/faker';

import { FilterPipe } from './filter.pipe';
import { Status, User } from './interfaces/user.interface';

describe('FilterPipe', () => {
  const Heisenberg: User = {
    char_id: 1,
    name: 'Walter',
    birthday: '09-07-1958',
    occupation: [
      'High School Chemistry Teacher',
      'Meth King Pin'
    ],
    img: 'https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg',
    status: Status.PresumedDead,
    nickname: 'Heisenberg',
    appearance: [1, 2, 3, 4, 5, 6],
    portrayed: 'Bryan Cranston',
    category: 'Breaking Bad',
    better_call_saul_appearance: []
  };
  const mockUsers: User[] = [Heisenberg, ...Array.from(Array(20), (_, n) => ({
    ...Heisenberg,
    name: faker.name.firstName(Gender.female),
    appearance: [1, 2, 3, 4, 5],
  }))];
  const pipe = new FilterPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return empty array', () => {
    expect(pipe.transform(mockUsers, 'name', 'abrakadabra')).toEqual([]);
  });

  it('should contain Walter name', () => {
    expect(pipe.transform(mockUsers, 'name', 'walter')).toContain(Heisenberg);
  });

  it('should contain appearance in 6th season', () => {
    expect(pipe.transform(mockUsers, 'appearance', '6')).toContain(Heisenberg);
  });
});
