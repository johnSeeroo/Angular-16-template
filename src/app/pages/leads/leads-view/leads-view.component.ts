import { Component, ElementRef, ViewChild } from "@angular/core";
import { LeadsInformation } from "../leads/data";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { EditleadsComponent } from "../editleads/editleads.component";

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
  @ViewChild("leadSection") leadSection!: ElementRef;
  @ViewChild("propertySection") propertySection!: ElementRef;
  @ViewChild("noteSection") noteSection!: ElementRef;
  @ViewChild("attachmentSection") attachmentSection!: ElementRef;
  constructor(private modalService: NgbModal) {
    /**
     * BreadCrumb
     */
    // this.breadCrumbItems = [{ label: "CRM" }, { label: "Leads-Edit", active: true }];
  }
  openEditLeadsModal() {
    const modalRef = this.modalService.open(EditleadsComponent, {
      size: "fullscreen", // Set the size as per your requirements
      windowClass: "modal-holder",
      keyboard: false, // Prevent closing by pressing Esc key
    });
    // You can pass data to the modal component if needed
    modalRef.componentInstance.data = this.leadsInformation; // Replace with your actual data
  }

  gotoLead() {
    // this.leadSection.nativeElement.scrollIntoView({ behavior: "smooth" });
    window.scrollTo(0, 0);
  }

  gotToProperty() {
    this.propertySection.nativeElement.scrollIntoView({ behavior: "smooth" });
  }

  goToNote() {
    this.noteSection.nativeElement.scrollIntoView({ behavior: "smooth" });
  }

  goToAttachment() {
    this.attachmentSection.nativeElement.scrollIntoView({ behavior: "smooth" });
  }
}
