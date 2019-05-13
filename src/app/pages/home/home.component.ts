import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, CdkDragEnter, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { TasksApiService } from '../../tasks/services/tasks-api.service';
import { GenericPagination } from '../../shared/services/genericPagination';
import { ITask } from '../../models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = 'Dashboard';
  public pagination: GenericPagination;
  public inProgress: ITask[];
  public readyToCheck: ITask[];
  public completed: ITask[];

  constructor(private taskApi: TasksApiService) {
    this.pagination = new GenericPagination(this.taskApi);
    this.inProgress = [];
    this.readyToCheck = [];
    this.completed = [];
  }

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.pagination.getList();
    localStorage.getItem('current');
  }

  onDrop(event: CdkDragDrop<object[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      console.log(event.container.data);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
      if (event.item.moved) {
        console.log('dropped', event.item.data);
        console.log('dropped', event.item.data.done);
        event.item.data.done = true;
        // event.item.data.subject = event.container.id;
        // console.log(event.item.data.subject);
        // this.taskApi.editObject();
        console.log('changed?', event.item.data.done);
      }
    }
  }

  entered(event: CdkDragEnter<ITask[]>) {
    console.log('entered', event.container.id, event.container);
  }
}
