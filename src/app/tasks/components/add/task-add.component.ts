import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TasksApiService } from '../../services/tasks-api.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.scss']
})
export class TaskAddComponent implements OnInit {

  private taskAddForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private api: TasksApiService,
    private location: Location
  ) {
  }

  ngOnInit() {
    this.formInit();
  }

  formInit() {
    this.taskAddForm = this.formBuilder.group({
      subject: [],
      description: [],
      employee: [],
      status: [],
      date: [],
    });
  }

  addTask(formValue) {
    this.api.addNewObject(formValue).subscribe();
    this.taskAddForm.reset();
  }

  goBack() {
    this.location.back();
  }

}
