import { Component, TemplateRef } from "@angular/core";
import { NgbOffcanvas } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-leads-list",
  templateUrl: "./leads-list.component.html",
  styleUrls: ["./leads-list.component.scss"],
})
export class LeadsListComponent {
  showFilter = false;
  constructor(private offcanvasService: NgbOffcanvas) {}
  openEnd(content: TemplateRef<any>) {
    this.offcanvasService.open(content, { position: "end" });
  }
}
