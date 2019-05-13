import { Directive, EventEmitter, HostBinding, HostListener, OnInit, Output } from '@angular/core';
import { DroppableService } from '../services';

@Directive({
  selector: '[appDropZone]',
  providers: [DroppableService]
})
export class DropZoneDirective implements OnInit {

  @Output() drop = new EventEmitter<PointerEvent>();

  @HostBinding('class.dropZone-activated') activated = false;
  @HostBinding('class.dropZone-entered') entered = false;

  constructor(private droppableService: DroppableService) {
  }

  ngOnInit(): void {
    this.droppableService.dragStart$.subscribe(() => this.onDragStart());
    this.droppableService.dragEnd$.subscribe(() => this.onDragEnd());
  }

  @HostListener('pointerenter') onPointerEnter(): void {
    if (!this.activated) {
      return;
    }
    this.entered = true;
  }

  @HostListener('pointerleave') onPointerLeave(): void {
    if (!this.activated) {
      return;
    }
    this.entered = false;
  }

  private onDragStart(): void {
    this.activated = true;
    console.log('drag in dropZone');
  }

  private onDragEnd(): void {
    if (!this.activated) {
      return;
    }

    if (this.entered) {
      console.log('drop');
    }

    this.activated = false;
    this.entered = false;
  }
}
