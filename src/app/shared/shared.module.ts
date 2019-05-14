import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LoaderComponent, PaginationComponent } from './components';
import {
  MatButtonModule,
  MatCardModule, MatDialogModule,
  MatIconModule, MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSelectModule
} from '@angular/material';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DeleteDialogComponent } from './components/delete-dialog/delete-dialog.component';
import {
  AuthApiService,
  AuthService,
} from './services';

@NgModule({
  declarations: [
    LoaderComponent,
    PaginationComponent,
    LoginComponent,
    DeleteDialogComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatInputModule,
    MatDialogModule,
  ],
  exports: [
    LoaderComponent,
    PaginationComponent,
    LoginComponent,
  ],
  entryComponents: [
    DeleteDialogComponent
  ],
  providers: [
    AuthApiService,
    AuthService,
  ],
})
export class SharedModule {
}

