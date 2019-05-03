import { IEmployee } from './iemployee';

export interface IAuth {
  is_authenticated: boolean;
  employee: IEmployee;
}
