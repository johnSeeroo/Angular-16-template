import { Directive, EventEmitter, Input, Output } from "@angular/core";
import { PropertyModel } from "./property-list.model";

export type SortColumn = keyof PropertyModel | "";
export type SortDirection = "asc" | "desc" | "";
const rotate: { [key: string]: SortDirection } = {
  asc: "desc",
  desc: "",
  "": "asc",
};

export interface PropertySortEvent {
  column: SortColumn;
  direction: SortDirection;
}

@Directive({
  selector: "th[PropertySortable]",
  host: {
    "[class.asc]": 'direction === "asc"',
    "[class.desc]": 'direction === "desc"',
    "(click)": "rotate()",
  },
})
export class NgbdPropertySortableHeader {
  @Input() Propertysortable: SortColumn = "";
  @Input() direction: SortDirection = "";
  @Output() Propertysort = new EventEmitter<PropertySortEvent>();

  rotate() {
    this.direction = rotate[this.direction];
    this.Propertysort.emit({
      column: this.Propertysortable,
      direction: this.direction,
    });
  }
}
