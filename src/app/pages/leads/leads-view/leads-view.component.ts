import { Component } from "@angular/core";
import { LeadsInformation } from "../leads/data";

@Component({
  selector: "app-leads-view",
  templateUrl: "./leads-view.component.html",
  styleUrls: ["./leads-view.component.scss"],
})
export class LeadsViewComponent {
  // bread crumb items
  breadCrumbItems!: Array<{}>;
  leadInfoReadMode = true;
  addressReadMode = true;
  descriptionReadMode = true;
  leadsInformation = LeadsInformation[0].data[0];
  leadId = LeadsInformation[0].data[0].leadId;
  constructor() {
    /**
     * BreadCrumb
     */
    // this.breadCrumbItems = [{ label: "CRM" }, { label: "Leads-Edit", active: true }];
  }
}
