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

import { ActivatedRoute } from "@angular/router";

// Date Format
import { DatePipe } from "@angular/common";

import { restApiService } from "../../../core/services/rest-api.service";
import { data } from "src/assets/data/permission";

import { Views } from "../data";

import { ViewModel } from "./views.model";

@Component({
  selector: "app-views",
  templateUrl: "./views.component.html",
  styleUrls: ["./views.component.scss"],
})
export class ViewsComponent {
  // bread crumb items
  breadCrumbItems!: Array<{}>;
  masterSelected!: boolean;
  views: { id: number; name: string }[] = Views;
  canWriteViewsModule: boolean = false;
  canDeleteViewsModule: boolean = false;
  constructor(
    private modalService: NgbModal,
    private formBuilder: UntypedFormBuilder,
    private restApiService: restApiService,
    private offcanvasService: NgbOffcanvas,
    private datePipe: DatePipe,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    /**
     * BreadCrumb
     */
    this.breadCrumbItems = [
      { label: "Property" },
      { label: "Views", active: true },
    ];
  }

  /**
   * Lunch Demo modal
   * @param content modal content
   */
  LaunchViewModel(content: any) {
    debugger;
    this.modalService.open(content);
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
