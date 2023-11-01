import { Component } from "@angular/core";
import { LeadsInformation } from "../leads/data";

@Component({
  selector: "app-leads-edit",
  templateUrl: "./leads-edit.component.html",
  styleUrls: ["./leads-edit.component.scss"],
})
export class LeadsEditComponent {
  // bread crumb items
  breadCrumbItems!: Array<{}>;
  leadInfoReadMode = true;
  addressReadMode = true;
  descriptionReadMode = true;
  leadsInformation = LeadsInformation[0].data[0];
  leadId= LeadsInformation[0].data[0].leadId
  constructor() {
    /**
     * BreadCrumb
     */
    // this.breadCrumbItems = [{ label: "CRM" }, { label: "Leads-Edit", active: true }]; 
  }
}
