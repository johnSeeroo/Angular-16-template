import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormArray, FormBuilder, FormGroup,Validators } from '@angular/forms';
import { LeadsInformation,LEADSOWNER, LEADSSOURCE, MARITALSTATUS, LEADSTATUS, NATIONALITY, CheckBoxType } from '../leads/data';
import { LeadSource, LeadStatus, LeadsOwner, MaritalStatus, Nationality } from '../leads/leads.model';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-editleads',
  templateUrl: './edit-addleads.component.html',
  styleUrls: ['./edit-addleads.component.scss']
})
export class EditaddleadsComponent {
  leadOwnerArray: LeadsOwner[] = LEADSOWNER;
  default: number = 1;

  leadSourceArray: LeadSource[] = LEADSSOURCE;

  maritalStatusArray: MaritalStatus[] = MARITALSTATUS;
  leadStatusArray: LeadStatus[] = LEADSTATUS;
  nationalityArray: Nationality[]= NATIONALITY;
  isResidential: boolean = true;
  isCommercial: boolean = false;

  check_box_type = CheckBoxType;

  currentlyChecked: any;
  editleadsform!: FormGroup;
  descriptionReadMode = true;
  LeadDetails:any;
  submitted = false;
  propertyPreferences: string = 'residential';
  residential!: FormArray;
  commercial!: FormArray;
  leadId!:string
  isEdit: boolean=false;
  title: string='add lead';
  // currentlyChecked: string = 'residential'; 


  constructor(public activeModal: NgbActiveModal,private formBuilder: FormBuilder,private route: ActivatedRoute,) {
    
    this.propertyPreferences = 'residential'; 
  
    
    this.currentlyChecked = CheckBoxType.APPLY_FOR_RESIDENTIAL;

    /**
     * Form Validation
     */
    this.editleadsform = this.formBuilder.group({
      leadOwner: ["", [Validators.required]],
      mobile: ["", [Validators.required,Validators.pattern("[a-zA-Z0-9]+")]],
      
      leadName: ["", [Validators.required]],
      alternateNumber: [
        "",
        [Validators.required, Validators.pattern("[0-9 ]{11}")],
      ],
      company: ["", [Validators.required]],
      designation: [
        "",
        [Validators.required, Validators.pattern("[a-zA-Z0-9]+")],
      ],
      industry: ["", [Validators.required,Validators.pattern("[a-zA-Z0-9]+")]],
      website: ["", [Validators.required]],
      leadSource: [null, [Validators.required]],
      leadStatus: [null, [Validators.required]],
      maritalStatus: [null, [Validators.required]],
      annualRevenue: [
        "",
        [Validators.required, Validators.pattern("[a-zA-Z0-9]+")],
      ],
      preferredTimeToCall: ["", [Validators.required]],
      nationality: [null, [Validators.required]],
      propertyPreferences: ["", Validators.required],     
      currentAddress: ["", [Validators.required]],
      residential: this.formBuilder.array([]),
      commercial: this.formBuilder.array([])
    });

    this.editleadsform.controls["leadOwner"].setValue(this.default, {
      onlySelf: true,
    });
  }
  ngOnInit(): void {
    /**
     * BreadCrumb
     */
    // this.breadCrumbItems = [{ label: "CRM" }, { label: "Leads", active: true }];
    if (LeadsInformation && LeadsInformation.length > 0 && LeadsInformation[0].data && LeadsInformation[0].data.length > 0) {
      this.LeadDetails = LeadsInformation[0].data[0];
    }
    this.currentlyChecked = CheckBoxType.APPLY_FOR_RESIDENTIAL;
    this.route.params.subscribe((data: any) => {
      debugger
      if (data.id) {        
        debugger        
        // this.setBreadCrumb();
        this.title = 'Leads Edit';
        this.leadId = data.id;
        // this.getDivisionDetails();
        this.isEdit = true;
        this.editformdetails();
      }

    });

    
    this.onSelectedBlockChange();
    console.log(this.LeadDetails)
    // this.addResidentialField();
    
    
  }

 

  
  onSelectedBlockChange() {
    this.editleadsform.get('propertyPreferences')!.valueChanges.subscribe(selectedValue => {
      if (selectedValue === 'residential') {
        this.addResidentialField();
        this.removeCommercialFieldValidators();
        this.clearCommercialFields();
      } else if (selectedValue === 'commercial') {
        console.log("Check the details in commercial")
        this.removeResidentialFieldValidators();
        this.addCommercialField();
       
        this.clearResidentialFields();
      }
    });
  }
  

  addResidentialField() {
    const residentialArray = this.editleadsform.get('residential') as FormArray;
    if (residentialArray.length === 0) {
      const newResidentialGroup = this.formBuilder.group({
        // Add fields for the residential FormArray
        // Example:
        preferredNeighbourhood: ['', Validators.required],
        desiredPropertyLocation: ['', Validators.required],
        numberOfBedrooms: ['', [Validators.required]],
        numberOfBathrooms: ['', [Validators.required]],
        priceRange: ['', [Validators.required]],
        propertyType: ['', [Validators.required]],
        unitType: ['', [Validators.required]],
        floorPreference: ['', [Validators.required]],
        viewPreference: ['', [Validators.required]],
        description: ['', [Validators.required]],        
        corporateEnquiry:[''],
        numberOfUnits:['',[Validators.required]],
        desiredmoveindate:['',[Validators.required]]
        // other fields you want to add dynamically
      });
      
      residentialArray.push(newResidentialGroup);
    }
    // console.log(this.leadsForm,"Leads form")
  }

  addCommercialField() {
    const commercialArray = this.editleadsform.get('commercial') as FormArray;
    if(commercialArray.length ===0){
      const newCommercialGroup = this.formBuilder.group({
        // Add fields for the commercial FormArray
        // Example:
        preferredNeighbourhood: ['', Validators.required],
        desiredPropertyLocation: ['', Validators.required],
        numberOfBedrooms: ['', [Validators.required]],
        numberOfBathrooms: ['', [Validators.required]],
        priceRange: ['', [Validators.required]],
        propertyType: ['', [Validators.required]],
        unitType: ['', [Validators.required]],
        floorPreference: ['', [Validators.required]],
        viewPreference: ['', [Validators.required]],
        description: ['', [Validators.required]],        
        corporateEnquiry:[''],
        numberOfUnits:['',[Validators.required]],
        desiredmoveindate:['',[Validators.required]]
        // other fields you want to add dynamically
       
      });
      commercialArray.push(newCommercialGroup);

    }
    
  }
  removeResidentialFieldValidators() {
    const residentialArray = this.editleadsform.get('residential') as FormArray;
    residentialArray.controls.forEach(control => {
      control.clearValidators();
      control.updateValueAndValidity();
    });
  }
  
  removeCommercialFieldValidators() {
    const commercialArray = this.editleadsform.get('commercial') as FormArray;
    commercialArray.controls.forEach(control => {
      control.clearValidators();
      control.updateValueAndValidity();
    });
  }
  
  clearResidentialFields() {
    const residentialArray = this.editleadsform.get('residential') as FormArray;
    residentialArray.clear();
  }
  
  clearCommercialFields() {
    const commercialArray = this.editleadsform.get('commercial') as FormArray;
    commercialArray.clear();
  }


// ...



  

close() {
    this.activeModal.close('Modal closed');
}
get form() {
  return this.editleadsform.controls;
}

submitForm() {debugger
  this.submitted = true;
  
 
  // // this.editleadsform.get('residential')?.setValue(null)
  console.log(this.editleadsform)
  // // Check if the form is valid
  // if (this.editleadsform.valid) {
    
  //   console.log('Form submitted with the following data:', this.editleadsform.value);

  //   // After successful submission, you can close the modal or perform other actions
  //   this.close();
  // }
  if (!this.editleadsform.valid) {
    return;
  }
  let value = this.editleadsform.value;
  if (!this.isEdit) {
    // this.divisioncreateservice.DivisionCreate(value).subscribe(() => {
    //   // this.modalService.showNotification("saved successfully")
      this.close();
      console.log(value,"Values")
    // });
  } else {
    // this.divisioncreateservice
    //   .updateDivision(value, this.leadId)
    //   .subscribe(() => {
    //     // this.modalService.showNotification("saved successfully")
        this.close();
        console.log(value,"Values")
    //   });
  }
  
}
selectCheckBox(targetType: CheckBoxType) {
  // If the checkbox was already checked, clear the currentlyChecked variable
  console.log(targetType,"Target type",this.currentlyChecked)

  if(targetType === 0 ||  (targetType === 1 && this.currentlyChecked === 1 ))
  {
   this.isResidential = true;
   this.isCommercial = false;
  }else{
   this.isResidential = false;
   this.isCommercial = true;
  }
  if(this.currentlyChecked === targetType) {
    this.currentlyChecked = CheckBoxType.APPLY_FOR_RESIDENTIAL;
    return;
  }
  
  this.currentlyChecked = targetType;
}




editformdetails() {debugger
    this.editleadsform.patchValue({
      leadOwner: this.LeadDetails.leadOwner,
      mobile: this.LeadDetails.phoneNumber,
      alternateNumber: this.LeadDetails.alternateNumber,
      website: this.LeadDetails.website,
      annualRevenue: this.LeadDetails.annualRevenue || 'none',
      createdBy: this.LeadDetails.createdBy,
      leadName: this.LeadDetails.leadName,
      company: this.LeadDetails.company,
      leadSource: this.LeadDetails.leadSource,
      maritalStatus: this.LeadDetails.martialStatus,
      modifiedBy: this.LeadDetails.modifiedBy,
      designation: this.LeadDetails.designation,
      leadStatus: this.LeadDetails.leadStatus,
      nationality: this.LeadDetails.nationality,
      industry: this.LeadDetails.industry,
      preferredTimeToCall: this.LeadDetails.preferredTimeToCall,
      address: this.LeadDetails.address,
    });
  
}


}
