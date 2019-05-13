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
  AuthService, DroppableService,
} from './services';
import { DraggableDirective, DropZoneDirective, MovableDirective } from './directives';
import { DroppableDirective } from './directives/droppable.directive';

@NgModule({
  declarations: [
    LoaderComponent,
    PaginationComponent,
    LoginComponent,
    DeleteDialogComponent,
    DraggableDirective,
    MovableDirective,
    DropZoneDirective,
    DroppableDirective
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
    DraggableDirective,
    MovableDirective,
    DropZoneDirective,
    DroppableDirective
  ],
  entryComponents: [
    DeleteDialogComponent
  ],
  providers: [
    AuthApiService,
    AuthService,
    DroppableService
  ],
})
export class SharedModule {
}

