import { Injectable } from "@angular/core";
import { EventEmitter } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class CommonService {
  selectedTopMenuItemId: EventEmitter<any> = new EventEmitter();

  constructor() {}

  setTopMenuItemId(id: number) {
    this.selectedTopMenuItemId.emit(id);
  }
}
