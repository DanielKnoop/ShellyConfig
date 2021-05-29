import { Injectable, EventEmitter, Input } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class EventsService {
  saveClickEvent = new EventEmitter<any>();
  @Input() saveClick() {
    this.saveClickEvent.emit();
  }


  constructor() { }
}
