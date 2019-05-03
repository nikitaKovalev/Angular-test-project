import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskAddComponent, TaskDetailsComponent, TaskListComponent } from './components';

const routes: Routes = [
  {
    path: '',
    component: TaskListComponent
  },
  {
    path: 'details/:id',
    component: TaskDetailsComponent
  },
  {
    path: 'add',
    component: TaskAddComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksRoutingModule { }
