import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class DroppableService {

  dragStart$: Observable<PointerEvent>;
  dragEnd$: Observable<PointerEvent>;

  private dragStartSubject = new Subject<PointerEvent>();
  private dragEndSubject = new Subject<PointerEvent>();

  constructor() {
    this.dragStart$ = this.dragStartSubject.asObservable();
    this.dragEnd$ = this.dragEndSubject.asObservable();
  }

  public onDragStart(event: PointerEvent): void {
    this.dragStartSubject.next(event);
  }

  public onDragEnd(event: PointerEvent): void {
    this.dragEndSubject.next(event);
  }
}
