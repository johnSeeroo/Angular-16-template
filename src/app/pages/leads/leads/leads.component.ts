import { Component, QueryList, ViewChildren, TemplateRef } from "@angular/core";
import { DecimalPipe } from "@angular/common";
import { Observable } from "rxjs";
import { NgbModal, NgbOffcanvas } from "@ng-bootstrap/ng-bootstrap";
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  FormArray,
  Validators,
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  AbstractControl,
} from "@angular/forms";

// Date Format
import { DatePipe } from "@angular/common";

import { restApiService } from "../../../core/services/rest-api.service";
import { data } from "src/assets/data/permission";

// Sweet Alert
import Swal from "sweetalert2";

import {
  LeadsModel,
  LeadsOwner,
  LeadSource,
  MaritalStatus,
  LeadStatus,
  Nationality
} from "./leads.model";
import {
  Leads,
  LEADSOWNER,
  LEADSSOURCE,
  MARITALSTATUS,
  LEADSTATUS,
  NATIONALITY,
  CheckBoxType
} from "./data";
import { LeadsService } from "./leads.service";
import {
  NgbdLeadsSortableHeader,
  leadSortEvent,
} from "./leads-sortable.directive";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-leads",
  templateUrl: "./leads.component.html",
  styleUrls: ["./leads.component.scss"],
  providers: [LeadsService, DecimalPipe],
})
/**
 * Leads Component
 */
export class LeadsComponent {
  // bread crumb items
  breadCrumbItems!: Array<{}>;
  submitted = false;
  leadsForm!: UntypedFormGroup;
  CustomersData!: LeadsModel[];
  masterSelected!: boolean;
  checkedList: any;

  // Api Data
  content?: any;
  leads : any;
  econtent?: any;
  user = data.data[0];
  // canWriteLeadsModule!: boolean| undefined;;
  // canDeleteLeadsModule!: boolean| undefined;;

  leadOwnerArray: LeadsOwner[] = LEADSOWNER;
  default: number = 1;

  leadSourceArray: LeadSource[] = LEADSSOURCE;

  maritalStatusArray: MaritalStatus[] = MARITALSTATUS;
  leadStatusArray: LeadStatus[] = LEADSTATUS;
  nationalityArray: Nationality[]= NATIONALITY;

  // Table data
  invoiceList!: Observable<LeadsModel[]>;
  total: Observable<number>;
  @ViewChildren(NgbdLeadsSortableHeader)
  headers!: QueryList<NgbdLeadsSortableHeader>;
  closeResult: any;
  canWriteLeadsModule: boolean = false;
  canDeleteLeadsModule: boolean = false;

  isResidential: boolean = true;
  isCommercial: boolean = false;

  check_box_type = CheckBoxType;

  currentlyChecked: any;


  constructor(
    private modalService: NgbModal,
    public service: LeadsService,
    private formBuilder: UntypedFormBuilder,
    private restApiService: restApiService,
    private offcanvasService: NgbOffcanvas,
    private datePipe: DatePipe,
    private route: ActivatedRoute
  ) {
    this.invoiceList = service.leads$;
    this.total = service.total$;
    this.canWriteLeadsModule = this.route.snapshot.data["permissions"]?.write;
    this.canDeleteLeadsModule = this.route.snapshot.data["permissions"]?.delete;
  }

 async ngOnInit(): Promise<void> {
    /**
     * BreadCrumb
     */
    this.breadCrumbItems = [{ label: "CRM" }, { label: "Leads", active: true }];
    this.currentlyChecked = CheckBoxType.APPLY_FOR_RESIDENTIAL;
   await this.restApiService.getDataSample('?limit=10&skip=10&select=title,price').subscribe((data: any) => {
      console.log(data,"API");
    });;
   
    /**
     * Form Validation
     */
    this.leadsForm = this.formBuilder.group({
      leadOwner: ["", [Validators.required]],
      mobile: ["", [Validators.required]],
      //email: ["", [Validators.required, Validators.email]],
      leadName: ["", [Validators.required, Validators.pattern("[a-zA-Z0-9]+")]],
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
     // desiredPropertyLocation: ["", Validators.required],
      //area: ["", [Validators.required]],
     // desiredMoveIndate: ["", [Validators.required]],
     // description: ["", [Validators.required]],
      currentAddress: ["", [Validators.required]],
      residential: this.formBuilder.array([]),
      commercial: this.formBuilder.array([])
    });

    this.leadsForm.controls["leadOwner"].setValue(this.default, {
      onlySelf: true,
    });
    this.subscribeToSelectionChanges();
    /**
     * fetches data
     */
    this.invoiceList.subscribe((x) => {
        console.log(x,"hhhhhh")
      });

    setTimeout(() => {
      this.invoiceList.subscribe((x) => {
        this.content = this.leads;
        this.leads = Object.assign([], x);
      });
      document.getElementById("elmLoader")?.classList.add("d-none");
    }, 1200);
  }


  /**
   * Open modal
   * @param content modal content
   */
  openModal(content: any) {
    this.submitted = false;
    this.modalService.open(content, { size: "md", centered: true });
  }

  /**
   * Form data get
   */
  get form() {
    return this.leadsForm.controls;
  }


  // File Upload
  imageURL: string | undefined;
  fileChange(event: any) {
    let fileList: any = event.target as HTMLInputElement;
    let file: File = fileList.files[0];
    document.getElementById("");
    this.leadsForm.patchValue({
      // image_src: file.name
      image_src: "avatar-8.jpg",
    });
    const reader = new FileReader();
    reader.onload = () => {
      this.imageURL = reader.result as string;
      (document.getElementById("lead-img") as HTMLImageElement).src =
        this.imageURL;
    };
    reader.readAsDataURL(file);
  }

  /**
   * Save user
   */
  saveUser() {
    if (this.leadsForm.valid) {
      if (this.leadsForm.get("ids")?.value) {
        this.restApiService
          .patchLeadData(this.leadsForm.value)
          .subscribe((data: any) => {
            this.service.leads = this.content.map((order: { _id: any }) =>
              order._id === data.data.ids ? { ...order, ...data.data } : order
            );
            this.modalService.dismissAll();
          });
      } else {
        this.restApiService
          .postContactData(this.leadsForm.value)
          .subscribe((data: any) => {
            this.service.leads.push(data.data);
            this.modalService.dismissAll();
            let timerInterval: any;
            Swal.fire({
              title: "Leads inserted successfully!",
              icon: "success",
              timer: 2000,
              timerProgressBar: true,
              willClose: () => {
                clearInterval(timerInterval);
              },
            }).then((result) => {
              if (result.dismiss === Swal.DismissReason.timer) {
              }
            });
          });
      }
    }
    setTimeout(() => {
      this.leadsForm.reset();
    }, 2000);
    this.submitted = true;
  }

  /**
   * Open Edit modal
   * @param content modal content
   */
  editDataGet(id: any, content: any) {
    this.submitted = false;
    this.modalService.open(content, { size: "md", centered: true });
    var modelTitle = document.querySelector(".modal-title") as HTMLAreaElement;
    modelTitle.innerHTML = "Edit Lead";
    var updateBtn = document.getElementById("add-btn") as HTMLAreaElement;
    updateBtn.innerHTML = "Update";

    this.restApiService.getSingLeadData(id).subscribe({
      next: (data) => {
        const users = JSON.parse(data);
        this.econtent = users.data;
        var img_data = document.getElementById("lead-img") as HTMLImageElement;
        img_data.src = "assets/images/users/" + this.econtent.image_src;
        this.leadsForm.controls["name"].setValue(this.econtent.name);
        this.leadsForm.controls["company"].setValue(this.econtent.company);
        this.leadsForm.controls["score"].setValue(this.econtent.score);
        this.leadsForm.controls["phone"].setValue(this.econtent.phone);
        this.leadsForm.controls["location"].setValue(this.econtent.location);
        this.leadsForm.controls["tags"].setValue(this.econtent.tags);
        this.leadsForm.controls["date"].setValue(this.econtent.date);
        this.leadsForm.controls["ids"].setValue(this.econtent._id);
      },
      error: (err) => {
        this.content = JSON.parse(err.error).message;
      },
    });
  }

  /**
   * Delete model
   */
  deleteId: any;
  confirm(content: any, id: any) {
    this.deleteId = id;
    this.modalService.open(content, { centered: true });
  }

  // Delete Data
  deleteData(id: any) {
    if (id) {
      this.restApiService.deletelead(id).subscribe({
        next: (data) => {},
        error: (err) => {
          this.content = JSON.parse(err.error).message;
        },
      });
      document.getElementById("l_" + id)?.remove();
    } else {
      this.checkedValGet.forEach((item: any) => {
        document.getElementById("l_" + item)?.remove();
      });
    }
  }

  /**
   * Multiple Delete
   */
  checkedValGet: any[] = [];
  deleteMultiple(content: any) {
    var checkboxes: any = document.getElementsByName("checkAll");
    var result;
    var checkedVal: any[] = [];
    for (var i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
        result = checkboxes[i].value;
        checkedVal.push(result);
      }
    }
    if (checkedVal.length > 0) {
      this.modalService.open(content, { centered: true });
    } else {
      Swal.fire({
        text: "Please select at least one checkbox",
        confirmButtonColor: "#299cdb",
      });
    }
    this.checkedValGet = checkedVal;
  }

  // The master checkbox will check/ uncheck all items
  checkUncheckAll(ev: any) {
    this.leads.forEach((x: { state: any }) => (x.state = ev.target.checked));
    var checkedVal: any[] = [];
    var result;
    for (var i = 0; i < this.leads.length; i++) {
      if (this.leads[i].state == true) {
        result = this.leads[i];
        checkedVal.push(result);
      }
    }
    this.checkedValGet = checkedVal;
    checkedVal.length > 0
      ? ((
          document.getElementById("remove-actions") as HTMLElement
        ).style.display = "block")
      : ((
          document.getElementById("remove-actions") as HTMLElement
        ).style.display = "none");
  }

  // Select Checkbox value Get
  onCheckboxChange(e: any) {
    var checkedVal: any[] = [];
    var result;
    for (var i = 0; i < this.leads.length; i++) {
      if (this.leads[i].state == true) {
        result = this.leads[i];
        checkedVal.push(result);
      }
    }
    this.checkedValGet = checkedVal;
    checkedVal.length > 0
      ? ((
          document.getElementById("remove-actions") as HTMLElement
        ).style.display = "block")
      : ((
          document.getElementById("remove-actions") as HTMLElement
        ).style.display = "none");
  }

  /**
   * Multiple Default Select2
   */
  selectValue = ["Lead", "Partner", "Exiting", "Long-term"];

  //  Filter Offcanvas Set
  openEnd(content: TemplateRef<any>) {
    this.offcanvasService.open(content, { position: "end" });
  }

  // Filtering
  isstatus?: any;
  SearchData() {
    var date = document.getElementById("isDate") as HTMLInputElement;
    var dateVal = date.value
      ? this.datePipe.transform(new Date(date.value), "yyyy-MM-dd")
      : "";

    if (dateVal != "") {
      this.leads = this.content.filter((order: any) => {
        return (
          this.datePipe.transform(new Date(order.date), "yyyy-MM-dd") == dateVal
        );
      });
    } else {
      this.leads = this.content;
    }
  }
  /**
   * Sort table data
   * @param param0 sort the column
   *
   */
  onSort({ column, direction }: leadSortEvent) {
    // resetting other headers
    this.headers.forEach((header) => {
      if (header.leadsortable !== column) {
        header.direction = "";
      }
    });

    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }

  /**
   *  Add new leads full modal
   *
   */

  fullModal(smallDataModal: any) {
    this.modalService.open(smallDataModal, {
      size: "fullscreen",
      windowClass: "modal-holder",
    });
  }
  /**
   * Form Submit
   * @param this.leadsform
   * @returns 
   */
  onSubmit() {
    console.log("Form submitted");
    this.submitted = true;
    console.log(this.leadsForm, "Invalid");

    const partSubmitted = this.leadsForm.get('propertyPreferences')!.value;


    if (partSubmitted === 'residential') {
      this.removeResidentialValidation();
    } else if (partSubmitted === 'commercial') {
      this.removeCommercialValidation();
    }
    if (this.leadsForm.invalid) {
      return;
    }

    // display form values on success
    alert("SUCCESS!! :-)\n\n" + JSON.stringify(this.leadsForm.value, null, 4));
  }

  /**
   *  USed to submit the form from modal
   */

  submitForm() {
    // Perform any pre-submission actions or validation if needed
    this.onSubmit();
  }
 
  /**
   * Residential and commercial checkbox 
   * @param targetType 
   * @returns 
   */

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

  subscribeToSelectionChanges() {
 
    this.leadsForm.get('propertyPreferences')!.valueChanges.subscribe(selectedValue => {
      if (selectedValue === 'residential') {
        this.addResidentialField();
      } else if (selectedValue === 'commercial') {
        this.addCommercialField();
      }
      // Add other conditions or logic based on the selected value
    });
  }
  addResidentialField() {
    const residentialArray = this.leadsForm.get('residential') as FormArray;
    const newResidentialGroup = this.formBuilder.group({
      // Add fields for the residential FormArray
      // Example:
      preferredNeighbourhood: ['', Validators.required],
      desiredPropertyLocation: ["", Validators.required],
      numberOfBedrooms: ["", [Validators.required]],
      numberOfBathrooms: ["", [Validators.required]],
      priceRange: ["", [Validators.required]],
      buildingType: ["", [Validators.required]],
      unitType: ["", [Validators.required]],
      floorPreference: ["", [Validators.required]],
      viewPreference: ["", [Validators.required]],
      description: ["", [Validators.required]],
      // other fields you want to add dynamically
    });
    residentialArray.push(newResidentialGroup);
    console.log(this.leadsForm,"Leads form")
  }

  addCommercialField() {
    const commercialArray = this.leadsForm.get('commercial') as FormArray;
    const newCommercialGroup = this.formBuilder.group({
      // Add fields for the commercial FormArray
      // Example:
      priceRange: ["", [Validators.required]],
      buildingType: ["", [Validators.required]],
      unitType: ["", [Validators.required]],
      floorPreference: ["", [Validators.required]],
      // other fields you want to add dynamically
    });
    commercialArray.push(newCommercialGroup);
  }

  removeResidentialValidation() {
    // Example: Remove the 'type' field validation from the 'residential' FormArray
    const residentialArray = this.leadsForm.get('residential') as FormArray;
    if (residentialArray && residentialArray.length > 0) {
      const firstResidentialGroup = residentialArray.at(0) as FormGroup;
      if (firstResidentialGroup) {
        firstResidentialGroup.get('preferredNeighbourhood')?.clearValidators();
        firstResidentialGroup.get('preferredNeighbourhood')?.updateValueAndValidity();
        // You might add similar logic for other fields in the residential FormArray
      }
    }
  }

  removeCommercialValidation() {
    // Example: Remove the 'type' field validation from the 'commercial' FormArray
    const commercialArray = this.leadsForm.get('commercial') as FormArray;
    if (commercialArray && commercialArray.length > 0) {
      const firstCommercialGroup = commercialArray.at(0) as FormGroup;
      if (firstCommercialGroup) {
        firstCommercialGroup.get('priceRange')?.clearValidators();
        firstCommercialGroup.get('priceRange')?.updateValueAndValidity();
        // You might add similar logic for other fields in the commercial FormArray
      }
    }
  }
}
