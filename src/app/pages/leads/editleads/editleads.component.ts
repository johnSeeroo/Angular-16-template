import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormArray, FormBuilder, FormGroup,Validators } from '@angular/forms';
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
  selectedBlock: string = 'residential';
  residentialForm!: FormGroup;
  commercialForm!: FormGroup;
  


  constructor(public activeModal: NgbActiveModal,private formBuilder: FormBuilder) {
    this.editleadsform = this.formBuilder.group({
      leadOwner: ['', Validators.required],
      mobile: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      alternateNumber: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      website: ['', [Validators.required,] ],
      annualRevenue: ['none'],
      createdBy: [''],
      leadName: ['',Validators.required],
      company: ['',Validators.required],
      leadSource: ['',Validators.required],
      maritalStatus: [''],
      modifiedBy: [''],
      designation: ['',Validators.required],
      leadStatus: ['',Validators.required],
      nationality: [''],
      industry: ['',Validators.required],
      preferredTimeToCall: ['',Validators.required],
      address: ['', Validators.required],
      // blockType: ['residential'], // Initialize with the default value (residential)          
      selectedBlock: ['residential', Validators.required],
      desiredpropertylocation:['',Validators.required],
      prefferedneighbourhood:['',Validators.required],
      numberofbedrooms:['',Validators.required],
      numberofbathrooms:['',Validators.required],
      pricerange:['',Validators.required],
      buildingtype:['',Validators.required],
      unittype:['',Validators.required],
      floorpreference:['',Validators.required],
      viewpreference:['',Validators.required],
      description:['Lorem Ipsum is simply dummy text of the printing and typesetting industry.',Validators.required],
      desiredpropertylocationcom:['',Validators.required],
      prefferedneighbourhoodcom:['',Validators.required],
      numberofbedroomscom:['',Validators.required],
      numberofbathroomscom:['',Validators.required],
      pricerangecom:['',Validators.required],
      buildingtypecom:['',Validators.required],
      unittypecom:['',Validators.required],
      floorpreferencecom:['',Validators.required],
      viewpreferencecom:['',Validators.required],
      descriptioncom:['Lorem Ipsum is simply dummy text of the printing and typesetting industry.',],
      residential: this.formBuilder.group({
        roomNumber: [""],
        squareFeet: [""],
        description: [""],
      }),
      commercial: this.formBuilder.group({
        rate: [""],
        description: [""],
        name: [""],
      }),
      
    });
    // this.selectedBlock = 'residential'; 
    this.editformdetails();
    this.onSelectedBlockChange();
  }
  onSelectedBlockChange() {debugger
    const selectedBlockValue = this.editleadsform.get('selectedBlock')?.value;
  
    if (selectedBlockValue === 'residential') {
      this.editleadsform.get('desiredpropertylocation')?.setValidators(Validators.required);
      this.editleadsform.get('desiredpropertylocationcom')?.clearValidators();
      this.editleadsform.get('prefferedneighbourhood')?.setValidators(Validators.required);
      this.editleadsform.get('prefferedneighbourhoodcom')?.clearValidators();
      this.editleadsform.get('numberofbedrooms')?.setValidators(Validators.required);
      this.editleadsform.get('numberofbedroomscom')?.clearValidators();
      this.editleadsform.get('numberofbathrooms')?.setValidators(Validators.required);
      this.editleadsform.get('numberofbathroomscom')?.clearValidators();
      this.editleadsform.get('pricerange')?.setValidators(Validators.required);
      this.editleadsform.get('pricerangecom')?.clearValidators();
      this.editleadsform.get('buildingtype')?.setValidators(Validators.required);
      this.editleadsform.get('buildingtypecom')?.clearValidators();
      this.editleadsform.get('unittype')?.setValidators(Validators.required);
      this.editleadsform.get('unittypecom')?.clearValidators();
      this.editleadsform.get('floorpreference')?.setValidators(Validators.required);
      this.editleadsform.get('floorpreferencecom')?.clearValidators();
      this.editleadsform.get('viewpreference')?.setValidators(Validators.required);
      this.editleadsform.get('viewpreferencecom')?.clearValidators();
      this.editleadsform.get('description')?.setValidators(Validators.required);
      this.editleadsform.get('descriptioncom')?.clearValidators();

      // Add similar code to set/clear validators for other fields
    } else if (selectedBlockValue === 'commercial') {
      this.editleadsform.get('desiredpropertylocationcom')?.setValidators(Validators.required);
      this.editleadsform.get('desiredpropertylocation')?.clearValidators();
      this.editleadsform.get('prefferedneighbourhoodcom')?.setValidators(Validators.required);
      this.editleadsform.get('prefferedneighbourhood')?.clearValidators();
      this.editleadsform.get('numberofbedroomscom')?.setValidators(Validators.required);
      this.editleadsform.get('numberofbedrooms')?.clearValidators();
      this.editleadsform.get('numberofbathroomscom')?.setValidators(Validators.required);
      this.editleadsform.get('numberofbathrooms')?.clearValidators();
      this.editleadsform.get('pricerangecom')?.setValidators(Validators.required);
      this.editleadsform.get('pricerange')?.clearValidators();
      this.editleadsform.get('buildingtypecom')?.setValidators(Validators.required);
      this.editleadsform.get('buildingtype')?.clearValidators();
      this.editleadsform.get('unittypecom')?.setValidators(Validators.required);
      this.editleadsform.get('unittype')?.clearValidators();
      this.editleadsform.get('floorpreferencecom')?.setValidators(Validators.required);
      this.editleadsform.get('floorpreference')?.clearValidators();
      this.editleadsform.get('viewpreferencecom')?.setValidators(Validators.required);
      this.editleadsform.get('viewpreference')?.clearValidators();
      this.editleadsform.get('descriptioncom')?.setValidators(Validators.required);
      this.editleadsform.get('description')?.clearValidators();
      // Add similar code to set/clear validators for other fields
    }
  
    // After updating validators, you need to update the form controls' validity
    this.editleadsform.updateValueAndValidity();
  }
  
  

close() {
    this.activeModal.close('Modal closed');
}
get form() {
  return this.editleadsform.controls;
}

submitForm() {debugger
  this.submitted = true;
 
  this.editleadsform.get('residential')?.setValue({})
  console.log(this.editleadsform)
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
    annualRevenue: this.LeadDetails.annualRevenue || 'none',
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
