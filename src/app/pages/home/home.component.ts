import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TasksApiService } from '../../tasks/services/tasks-api.service';
import { GenericPagination } from '../../shared/services/genericPagination';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public pagination: GenericPagination;

  constructor(private taskApi: TasksApiService) {
    this.pagination = new GenericPagination(this.taskApi);
  }

  ngOnInit() {
  }
}
