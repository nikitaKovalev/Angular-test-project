import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import {
  TaskAddComponent,
  TaskDetailsComponent,
  TaskEditComponent,
  TaskListComponent
} from './components';

// Material modules
import {
  MatButtonModule,
  MatCardModule,
  MatDatepickerModule, MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatNativeDateModule
} from '@angular/material';

import { SharedModule } from '../shared/shared.module';
import { TasksApiService } from './services/tasks-api.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientXsrfModule } from '@angular/common/http';

@NgModule({
  declarations: [
    TaskListComponent,
    TaskDetailsComponent,
    TaskEditComponent,
    TaskAddComponent
  ],
  imports: [
    CommonModule,
    TasksRoutingModule,
    SharedModule,
    FormsModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'csrftoken',
      headerName: 'X-CSRFToken',
    }),
    // Material modules
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatDialogModule,
  ],
  entryComponents: [
    TaskEditComponent
  ],
  providers: [
    TasksApiService
  ],
  exports: [
    TaskListComponent
  ]
})
export class TasksModule {
}
