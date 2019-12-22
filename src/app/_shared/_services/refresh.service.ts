import {EventEmitter} from '@angular/core';

export class RefreshService {
  private day:boolean = true;
  onClick:EventEmitter<boolean> = new EventEmitter();

  public refresh(){
    this.day = !this.day;
    this.onClick.emit(this.day);
  }
}