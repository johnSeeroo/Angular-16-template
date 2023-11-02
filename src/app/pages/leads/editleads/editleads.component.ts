import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { LeadsInformation } from '../leads/data';
@Component({
  selector: 'app-editleads',
  templateUrl: './editleads.component.html',
  styleUrls: ['./editleads.component.scss']
})
export class EditleadsComponent {
  editleadsform!: FormGroup;
  descriptionReadMode = true;
  LeadDetails=LeadsInformation[0].data[0]
  submitted = false;



  constructor(public activeModal: NgbActiveModal,private formBuilder: FormBuilder) {
    this.editleadsform = this.formBuilder.group({
      leadOwner: ['', Validators.required],
      mobile: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      alternateNumber: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
      website: [''],
      annualRevenue: [''],
      createdBy: [''],
      leadName: [''],
      company: [''],
      leadSource: [''],
      maritalStatus: [''],
      modifiedBy: [''],
      designation: [''],
      leadStatus: [''],
      nationality: [''],
      industry: [''],
      preferredTimeToCall: [''],
      address: ['', Validators.required],
      residential:[false],
      commercial:[false],
      desiredpropertylocation:[''],
      prefferedneighbourhood:[''],
      numberofbedrooms:[''],
      numberofbathrooms:[''],
      pricerange:[''],
      buildingtype:[''],
      unittype:[''],
      floorpreference:[''],
      viewpreference:[''],
      description:['Lorem Ipsum is simply dummy text of the printing and typesetting industry.',]
      
    });
    console.log(this.LeadDetails)
    this.editformdetails();
    
  }

close() {
    this.activeModal.close('Modal closed');
}
get form() {
  return this.editleadsform.controls;
}
submitForm() {debugger
  this.submitted = true;

  // Check if the form is valid
  if (this.editleadsform.valid) {
    
    console.log('Form submitted with the following data:', this.editleadsform.value);

    // After successful submission, you can close the modal or perform other actions
    this.close();
  }
}


editformdetails(){
  this.editleadsform.patchValue({
    leadOwner: this.LeadDetails.leadOwner,
    mobile: this.LeadDetails.phoneNumber,    
    alternateNumber: this.LeadDetails.alternateNumber,
    website: this.LeadDetails.website,
    annualRevenue:this.LeadDetails.annualRevenue,
    createdBy:this.LeadDetails.createdBy,
    leadName:this.LeadDetails.leadName,
    company:this.LeadDetails.company,
    leadSource:this.LeadDetails.leadSource,
    maritalStatus:this.LeadDetails.martialStatus,
    modifiedBy:this.LeadDetails.modifiedBy,
    designation:this.LeadDetails.designation,
    leadStatus:this.LeadDetails.leadStatus,
    nationality:this.LeadDetails.nationality,
    industry:this.LeadDetails.industry,
    preferredTimeToCall:this.LeadDetails.preferredTimeToCall,
    address:this.LeadDetails.address, 
   
   
  });
  
}
}
