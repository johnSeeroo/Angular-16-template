import { Component, ElementRef, ViewChild } from "@angular/core";
import { LeadsInformation } from "../leads/data";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { EditaddleadsComponent } from "../edit-addleads/edit-addleads.component";


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
  config = {};
  leadsInformation = LeadsInformation[0].data[0];
  leadId = LeadsInformation[0].data[0].leadId;
  @ViewChild("leadSection") leadSection!: ElementRef;
  @ViewChild("propertySection") propertySection!: ElementRef;
  @ViewChild("noteSection") noteSection!: ElementRef;
  @ViewChild("attachmentSection") attachmentSection!: ElementRef;
  @ViewChild("timeLineSection") timeLineSection!: ElementRef;
  @ViewChild("activitySection") activitySection!: ElementRef;
  constructor(private modalService: NgbModal) {
    /**
     * BreadCrumb
     */
    // this.breadCrumbItems = [{ label: "CRM" }, { label: "Leads-Edit", active: true }];
    
  }
  // Add leads//
  
  openEditLeadsModal(leadId?:any) {
    const modalRef = this.modalService.open(EditaddleadsComponent, {
      size: "fullscreen", // Set the size as per your requirements
      windowClass: "modal-holder",
      keyboard: false, // Prevent closing by pressing Esc key
    });
    // You can pass data to the modal component if needed
    modalRef.componentInstance.data = this.leadsInformation; // Replace with your actual data
    modalRef.componentInstance.leadId = leadId;
  }
    
  onFileRemoved(event: Event)
  {

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

  goToTimeline() {
    this.timeLineSection.nativeElement.scrollIntoView({ behavior: "smooth" });
  }

  goToActivity() {
    this.activitySection.nativeElement.scrollIntoView({ behavior: "smooth" });
  }
}
