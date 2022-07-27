export enum Status {
  'Alive' = 'Alive',
  'Deceased' = 'Deceased',
  'PresumedDead' = 'Presumed dead',
}

export interface User {
  appearance: number[];
  better_call_saul_appearance: [];
  birthday: string;
  category: string;
  char_id: number;
  img: string;
  name: string;
  nickname: string;
  occupation: string[];
  portrayed: string;
  status: Status;
}
