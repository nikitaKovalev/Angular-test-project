import { Component, OnInit } from '@angular/core';
import { GenericPagination } from '../../../shared/services';
import { TasksApiService } from '../../../tasks/services/tasks-api.service';
import { CdkDragDrop, CdkDragEnter, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { IkanbanBoards, ITask } from '../../../models';
import { KANBANBOARDS } from '../../../mocks/kanbanBoards';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  private title: string;
  public pagination: GenericPagination;
  private boards: IkanbanBoards[];

  constructor(private api: TasksApiService) {
    this.title = 'Dashboard';
    this.pagination = new GenericPagination(this.api);
    this.boards = [];
  }

  ngOnInit(): void {
    this.fetchData();
    this.boards = KANBANBOARDS;
  }

  fetchData(): void {
    this.pagination.getList();
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
        event.item.data.status = parseInt(event.container.id);
        this.api.editObject(event.item.data.id, event.item.data).subscribe();
      }
    }
  }

  entered(event: CdkDragEnter<ITask[]>) {
    console.log('entered', event.container.id, event.container);
  }
}
