import { Component, Input, OnInit } from '@angular/core';
import { GenericPagination } from '../../services/genericPagination';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  @Input() pagination: GenericPagination;

  constructor() {
  }

  ngOnInit() {
  }

}
