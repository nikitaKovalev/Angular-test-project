import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { TaskDetailsComponent } from '../details/task-details.component';
import { TasksApiService } from '../../services/tasks-api.service';

export interface DialogData {
  id: number;
  subject: string;
  description: string;
}

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.scss']
})
export class TaskEditComponent {

  constructor(
    public dialogRef: MatDialogRef<TaskDetailsComponent>,
    private taskApi: TasksApiService,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
  }

  onSave() {
    this.taskApi.editObject(this.data.id, this.data).subscribe();
    this.dialogRef.close();
  }

}
