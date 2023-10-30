import { Component } from "@angular/core";
import { LeadsInformation } from "../leads/data";

@Component({
  selector: "app-leads-edit",
  templateUrl: "./leads-edit.component.html",
  styleUrls: ["./leads-edit.component.scss"],
})
export class LeadsEditComponent {
  leadsInformation = LeadsInformation[0].data[0];
}