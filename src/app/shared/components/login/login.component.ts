import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthApiService } from '../../services/auth-api.service';
import { Router } from '@angular/router';
import { IEmployee } from '../../../models';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private formAuth: FormGroup;
  private hide: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private authApi: AuthApiService,
    private auth: AuthService,
    private router: Router,
  ) {
    this.hide = true;
  }

  ngOnInit() {
    this.formOnInit();
  }

  formOnInit() {
    this.formAuth = this.formBuilder.group({
      login: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit() {
    const controls = this.formAuth.controls;
    if (this.formAuth.invalid) {
      Object.keys(controls)
        .forEach(controlName => controls[controlName].markAsTouched());
      return;
    } else {
      this.authApi.login(this.formAuth.value)
        .subscribe((employee: IEmployee) => {
          this.auth.loggedInState(employee);
          this.router.navigate(['']);
        },
          () => {
          console.log('error');
        });
    }
    console.log(this.formAuth.value);
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.formAuth.controls[controlName];
    const result = control.invalid && control.touched;
    return result;
  }

  showPassword() {
    this.hide = !this.hide;
  }

}
