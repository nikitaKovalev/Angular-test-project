import { Component, OnInit } from '@angular/core';
import { GenericPagination } from '../../shared/services/genericPagination';
import { TasksApiService } from '../../tasks/services/tasks-api.service';

const heroData = [
  {
    name: 'Tor',
    group: 'Good'
  },
  {
    name: 'Hulk',
    group: 'Good'
  },
  {
    name: 'Loky',
    group: 'Evil'
  },
  {
    name: 'Tony Stark',
    group: 'Good'
  },
];

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  public paginator: GenericPagination;
  public heroList = [];
  private dragging: boolean;

  constructor(private api: TasksApiService) {
    this.paginator = new GenericPagination(this.api);
    this.heroList = heroData;
    this.dragging = false;
  }

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.paginator.getList();
  }

  change(task) {
    task.done = !task.done;
  }

  allowDrop(event: DragEvent): void {
    event.preventDefault();
  }

  drag(event): void {
    event.dataTransfer.setData('text', event.target.id);
    this.dragging = true;
  }

  drop(event): void {
    event.preventDefault();
    const data = event.dataTransfer.getData('text');
    const target = event.target;
    if (target.className === 'list') {
      target.appendChild(document.getElementById(data));
      event.dataTransfer.clearData();
      this.dragging = false;
    } else {
      this.dragging = false;
      return;
    }
  }
}
