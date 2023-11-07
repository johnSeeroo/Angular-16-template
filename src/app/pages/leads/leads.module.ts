import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import {
  NgbPaginationModule,
  NgbTypeaheadModule,
  NgbDropdownModule,
  NgbNavModule,
  NgbAccordionModule,
  NgbRatingModule,
  NgbTooltipModule,
} from "@ng-bootstrap/ng-bootstrap";

// Mask
import {
  NgxMaskDirective,
  NgxMaskPipe,
  provideNgxMask,
  IConfig,
} from "ngx-mask";

// Range Slider
import { NgxSliderModule } from "ngx-slider-v2";
// Simple bar
import { SimplebarAngularModule } from "simplebar-angular";
// Swiper Slider
import { SlickCarouselModule } from "ngx-slick-carousel";

import { DROPZONE_CONFIG, DropzoneConfigInterface } from "ngx-dropzone-wrapper";

import { LeadsRoutingModule } from "./leads-routing.module";
import { AddleadsComponent } from "./addleads/addleads.component";
import { ListleadsComponent } from "./listleads/listleads.component";
import { DatePipe } from "@angular/common";
import { LeadsListComponent } from "./leads-list/leads-list.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PageSharedModule } from "../shared/shared.module";
import { LeadsComponent } from "./leads/leads.component";
import { SharedModule } from "src/app/shared/shared.module";
import { FlatpickrModule } from "angularx-flatpickr";
import { NgSelectModule } from "@ng-select/ng-select";
import { NgbdLeadsSortableHeader } from "./leads/leads-sortable.directive";
import { NgxSkeletonLoaderModule } from "ngx-skeleton-loader";
import { LeadsViewComponent } from "./leads-view/leads-view.component";
import { EditleadsComponent } from './editleads/editleads.component';
import { DropzoneModule } from 'ngx-dropzone-wrapper';

 

const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
  url: "https://httpbin.org/post",
  maxFilesize: 50,
  acceptedFiles: "image/*",
};

@NgModule({
  declarations: [
    AddleadsComponent,
    ListleadsComponent,
    LeadsListComponent,
    LeadsComponent,
    NgbdLeadsSortableHeader,
    LeadsViewComponent,
    EditleadsComponent,
    
  ],
  imports: [
    CommonModule,
    LeadsRoutingModule,
    NgbPaginationModule,
    NgbTypeaheadModule,
    NgbDropdownModule,
    NgbNavModule,
    NgbAccordionModule,
    NgbRatingModule,
    NgbTooltipModule,
    NgxSliderModule,
    SlickCarouselModule,
    SimplebarAngularModule,
    NgxMaskDirective,
    NgxMaskPipe,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    PageSharedModule,
    SharedModule,
    FlatpickrModule,
    NgSelectModule,
    NgxSkeletonLoaderModule,
    DropzoneModule
  ],
  providers: [
    provideNgxMask(),
    DatePipe,
    {
      provide: DROPZONE_CONFIG,
      useValue: DEFAULT_DROPZONE_CONFIG,
    },
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LeadsModule {}
