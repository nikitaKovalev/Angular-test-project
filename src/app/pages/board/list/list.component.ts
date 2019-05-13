import { Component, OnInit } from '@angular/core';

const list = [
  {
    name: 'Box 1'
  },
  {
    name: 'Box 2'
  },
  {
    name: 'Box 3'
  },
  {
    name: 'Box 4'
  },
  {
    name: 'Box 5'
  },
];

const dropList = [
  {
    name: 'DropZone Box'
  }
];

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  private list = [];
  private dropZoneBox = [];

  constructor() {
    this.list = list;
    this.dropZoneBox = dropList;
  }

  ngOnInit(): void {
  }

  onDragStart($event: PointerEvent): void {
    console.log('drag start');
  }

  onDragMove($event: PointerEvent): void {
    console.log(`moving X:${$event.clientX} & Y:${$event.clientY}`);
  }

  onDragEnd($event: PointerEvent): void {
    console.log('end');
  }
}
