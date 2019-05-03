import { EventEmitter, Injectable } from '@angular/core';
import { IEmployee } from '../../models';
import { promise } from 'selenium-webdriver';

@Injectable()
export class AuthService {

  public employee: IEmployee;
  public isAuthenticated: Promise<boolean>;
  public isLoggedIn$: EventEmitter<boolean>;

  constructor() {
    this.isLoggedIn$ = new EventEmitter();
    this.isLoggedIn$.subscribe((state) => {
      this.isAuthenticated = state;
    });
    this.employee = null;
  }

  public loggedInState(employee: IEmployee) {
    this.employee = employee;
    this.isLoggedIn$.emit(true);
  }

  public loggedOutState() {
    this.employee = null;
    this.isLoggedIn$.emit(false);
  }
}
