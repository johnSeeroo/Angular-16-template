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
  PropertyModel,
  PropertyOwner,
  PropertySource,
  MaritalStatus,
  PropertyStatus,
  Nationality,
} from "./property-list.model";
import {
  Leads,
  LEADSOWNER,
  LEADSSOURCE,
  MARITALSTATUS,
  LEADSTATUS,
  NATIONALITY,
  CheckBoxType,
} from "../data";
// import { LeadsService } from "./leads.service";
import {
  NgbdPropertySortableHeader,
  PropertySortEvent,
} from "./property-list.sortable.directive";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-property-list",
  templateUrl: "./property-list.component.html",
  styleUrls: ["./property-list.component.scss"],
})
export class PropertyListComponent {
  // bread crumb items
  breadCrumbItems!: Array<{}>;
  submitted = false;
  propertyForm!: UntypedFormGroup;
  CustomersData!: PropertyModel[];
  masterSelected!: boolean;
  checkedList: any;

  // Api Data
  content?: any;
  leads = Leads[0].data;
  econtent?: any;
  user = data.data[0];
  // canWriteLeadsModule!: boolean| undefined;;
  // canDeleteLeadsModule!: boolean| undefined;;

  leadOwnerArray: PropertyOwner[] = LEADSOWNER;
  default: number = 1;

  leadSourceArray: PropertySource[] = LEADSSOURCE;

  maritalStatusArray: MaritalStatus[] = MARITALSTATUS;
  leadStatusArray: PropertyStatus[] = LEADSTATUS;
  nationalityArray: Nationality[] = NATIONALITY;

  // Table data
  invoiceList!: Observable<PropertyModel[]>;
  total: Observable<number> | any;
  @ViewChildren(NgbdPropertySortableHeader)
  headers!: QueryList<NgbdPropertySortableHeader>;
  closeResult: any;
  canWriteLeadsModule: boolean = false;
  canDeleteLeadsModule: boolean = false;

  isResidential: boolean = true;
  isCommercial: boolean = false;

  check_box_type = CheckBoxType;

  currentlyChecked: any;
  constructor(
    private modalService: NgbModal,
    // public service: LeadsService,
    private formBuilder: UntypedFormBuilder,
    private restApiService: restApiService,
    private offcanvasService: NgbOffcanvas,
    private datePipe: DatePipe,
    private route: ActivatedRoute
  ) {
    this.total = 10;
  }

  selectValue = ["Lead", "Partner", "Exiting", "Long-term"];

  ngOnInit(): void {
    /**
     * BreadCrumb
     */
    this.breadCrumbItems = [
      { label: "CRM" },
      { label: "Property", active: true },
    ];
    this.currentlyChecked = CheckBoxType.APPLY_FOR_RESIDENTIAL;

    /**
     * Form Validation
     */
    this.propertyForm = this.formBuilder.group({
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
      industry: ["", [Validators.required, Validators.pattern("[a-zA-Z0-9]+")]],
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
      commercial: this.formBuilder.array([]),
    });

    this.propertyForm.controls["leadOwner"].setValue(this.default, {
      onlySelf: true,
    });
    this.subscribeToSelectionChanges();
    /**
     * fetches data
     */
    setTimeout(() => {
      // this.invoiceList.subscribe((x) => {
      //   this.content = this.leads;
      //   this.leads = Object.assign([], x);
      // });
      document.getElementById("elmLoader")?.classList.add("d-none");
    }, 1200);
  }

  subscribeToSelectionChanges() {
    this.propertyForm
      .get("propertyPreferences")!
      .valueChanges.subscribe((selectedValue) => {
        /* if (selectedValue === 'residential') {
        this.addResidentialField();
      } else if (selectedValue === 'commercial') {
        this.addCommercialField();
      } */
        // Add other conditions or logic based on the selected value
      });
  }

  /**
   * Form data get
   */
  get form() {
    return this.propertyForm.controls;
  }

  saveUser() {
    return true;
  }

  checkedValGet: any[] = [];
  deleteMultiple(content: any) {}

  //  Filter Offcanvas Set
  openEnd(content: TemplateRef<any>) {
    this.offcanvasService.open(content, { position: "end" });
  }

  checkUncheckAll(ev: any) {}

  onCheckboxChange(e: any) {}

  onSort(e: any) {}

  deleteId: any;
  confirm(content: any, id: any) {
    /* this.deleteId = id;
    this.modalService.open(content, { centered: true }); */
  }

  // Filtering
  isstatus?: any;
  SearchData() {}

  deleteData(id: any) {}

  fullModal() {}
}
