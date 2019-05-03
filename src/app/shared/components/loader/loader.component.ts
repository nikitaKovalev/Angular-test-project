import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  public color: string;
  public mode: string;
  public value: number;

  constructor() {
    this.color = 'primary';
    this.mode = 'indeterminate';  // determinate
    this.value = 50;
  }

  ngOnInit() {
  }

}
