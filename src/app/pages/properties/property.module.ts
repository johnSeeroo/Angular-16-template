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

import { DatePipe } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PageSharedModule } from "../shared/shared.module";
import { SharedModule } from "src/app/shared/shared.module";
import { FlatpickrModule } from "angularx-flatpickr";
import { NgSelectModule } from "@ng-select/ng-select";
// import { NgbdLeadsSortableHeader } from "./leads/leads-sortable.directive";
import { NgxSkeletonLoaderModule } from "ngx-skeleton-loader";
import { PropertyRoutingModule } from "./property-routing.module";
import { PropertyListComponent } from "./property-list/property-list.component";
import { NgbdPropertySortableHeader } from "./property-list/property-list.sortable.directive";
import { ViewsComponent } from './views/views.component';

const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
  url: "https://httpbin.org/post",
  maxFilesize: 50,
  acceptedFiles: "image/*",
};

@NgModule({
  declarations: [PropertyListComponent, NgbdPropertySortableHeader, ViewsComponent],
  imports: [
    CommonModule,
    PropertyRoutingModule,
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
export class PropertyModule {}
