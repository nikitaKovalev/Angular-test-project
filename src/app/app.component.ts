import { Component, OnInit } from '@angular/core';
import { AuthApiService } from './shared/services/auth-api.service';
import { Router } from '@angular/router';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public tasksCounter: number;

  constructor(
    private authApi: AuthApiService,
    public auth: AuthService,
    private router: Router
  ) {
    this.tasksCounter = 0;
  }

  ngOnInit() {
    this.restoreSession();
  }

  restoreSession() {
    this.authApi.restoreSession().subscribe((response) => {
      if (response.is_authenticated) {
        console.log('User is authenticated');
        this.auth.loggedInState(response.employee);
      } else {
        this.auth.loggedOutState();
        this.router.navigate(['login']);
        console.log('User is not authenticated');
      }
    });
  }

  logout() {
    this.authApi.logout().subscribe(
      () => {
        this.auth.loggedOutState();
        this.router.navigate(['login']);
      });
  }
}
