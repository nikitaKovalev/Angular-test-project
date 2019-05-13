import { Component, OnInit } from '@angular/core';
import { GenericPagination } from '../../../shared/services/genericPagination';
import { TasksApiService } from '../../services/tasks-api.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  private pagination: GenericPagination;
  private loaded: boolean;
  public searchText: string;

  constructor(private api: TasksApiService) {
    this.searchText = '';
    this.pagination = new GenericPagination(this.api);
    this.loaded = false;
  }

  ngOnInit() {
    this.loadTasksList();
    this.searchParams();
  }

  loadTasksList() {
    this.pagination.getList();
    this.loaded = true;
  }

  searchParams() {
    this.pagination.searchParams(this.searchText);
  }

  changeStatus(id, status) {
    console.log(status);
    this.api.editObject(id, status).subscribe();
  }
}
