import { Component, EventEmitter, OnInit } from '@angular/core';
import { GenericPagination } from '../../shared/services/genericPagination';
import { TasksApiService } from '../../tasks/services/tasks-api.service';
import { ITask } from '../../models';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  public paginator: GenericPagination;
  private dragging: boolean;
  private todo: ITask;

  constructor(private api: TasksApiService) {
    this.paginator = new GenericPagination(this.api);
    this.dragging = false;
  }

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.paginator.getList();
  }

  allowDrop(event): void {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
    event.target.style.backgroundColor = 'red';
  }

  drag(event, todo: ITask): void {
    event.dataTransfer.setData('text', event.target.id);
    this.dragging = true;
    this.todo = todo;
  }

  drop(event): void {
    event.preventDefault();
    const data = event.dataTransfer.getData('text');
    const target = event.target;

    if (target.className === 'list') {
      // target.appendChild(document.getElementById(data));
      this.todo.status = parseInt(target.id);
      this.api.editObject(this.todo.id, this.todo).subscribe();
      event.dataTransfer.clearData();
      this.dragging = false;
    } else {
      this.dragging = false;
      return;
    }
  }
}
