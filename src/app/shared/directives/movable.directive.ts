import { Directive, HostBinding, HostListener } from '@angular/core';
import { DraggableDirective } from './draggable.directive';
import { DomSanitizer } from '@angular/platform-browser';


interface IPosition {
  x: number;
  y: number;
}

@Directive({
  selector: '[appMovable]'
})
export class MovableDirective extends DraggableDirective {

  @HostBinding('class.movable') movable = true;
  public position: IPosition = { x: 0, y: 0 };
  public startPosition: IPosition;

  @HostBinding('style.transform') get transform() {
    return this.sanitaizer.bypassSecurityTrustStyle(
      `translateX(${ this.position.x }px) translateY(${ this.position.y }px)`
    );
  }

  constructor(private sanitaizer: DomSanitizer) {
    super();
  }

  @HostListener('dragStart', ['$event'])
  private onDragStart(event: PointerEvent): void {
    this.startPosition = {
      x: event.clientX - this.position.x,
      y: event.clientY - this.position.y
    };
  }

  @HostListener('dragMove', ['$event'])
  private onDragMove(event: PointerEvent): void {
    this.position.x = event.clientX - this.startPosition.x;
    this.position.y = event.clientY - this.startPosition.y;
  }

  @HostListener('dragEnd', ['$event'])
  private onDragEnd(): void {
  }
}
