import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IAuth, IEmployee } from '../../models';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class AuthApiService {

  private restoreSessionUrl = '/api/auth/restore-session';
  private loginUrl = '/api/auth/login/';
  private logoutUrl = '/api/auth/logout/';

  constructor(private http: HttpClient) {
  }

  public restoreSession(): Observable<IAuth> {
    return this.http.get<IAuth>(this.restoreSessionUrl)
      .pipe(
        map((response: IAuth) => {
          return {
            is_authenticated: response.is_authenticated,
            employee: new IEmployee(response.employee)
          };
        }));
  }

  public login(data) {
    return this.http.post(this.loginUrl, data);
  }

  public logout() {
    return this.http.post(this.logoutUrl, null);
  }

}
