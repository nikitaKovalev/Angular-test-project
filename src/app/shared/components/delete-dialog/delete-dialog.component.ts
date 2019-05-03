import { Component, Inject } from '@angular/core';
import { TasksApiService } from '../../../tasks/services/tasks-api.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { TaskDetailsComponent } from '../../../tasks/components';
import { DialogData } from '../../../tasks/components/edit/task-edit.component';
import { Location } from '@angular/common';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.scss']
})
export class DeleteDialogComponent {

  constructor(
    private taskApi: TasksApiService,
    public dialogRef: MatDialogRef<TaskDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private location: Location
  ) {
  }

  onYes() {
    this.taskApi.deleteObject(this.data.id)
      .subscribe(() => this.location.back());
  }

}
