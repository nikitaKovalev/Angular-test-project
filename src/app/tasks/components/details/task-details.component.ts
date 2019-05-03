import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { TasksApiService } from '../../services/tasks-api.service';
import { ITask } from '../../../models';
import { MatDialog } from '@angular/material';
import { TaskEditComponent } from '../edit/task-edit.component';
import { DeleteDialogComponent } from '../../../shared/components/delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss']
})
export class TaskDetailsComponent implements OnInit {

  public loaded: boolean;
  public task: ITask;

  constructor(
    private activatedRoute: ActivatedRoute,
    private api: TasksApiService,
    private location: Location,
    private dialog: MatDialog
  ) {
    this.loaded = false;
    this.task = null;
  }

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    const id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    this.api.getObject(id)
      .subscribe((task: ITask) => {
        this.task = task;
        this.loaded = true;
      });
  }

  delete() {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '400px',
      data: {
        id: this.task.id
      }
    });
    dialogRef.afterClosed().subscribe();
  }

  openEditor() {
    const dialogRef = this.dialog.open(TaskEditComponent, {
      width: '400px',
      data: {
        id: this.task.id,
        subject: this.task.subject,
        description: this.task.description,
      }
    });

    dialogRef.afterClosed().subscribe();
  }

  goBack() {
    this.location.back();
  }

}
