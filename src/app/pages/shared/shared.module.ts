import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import {
  NgbAccordionModule,
  NgbDropdownModule,
  NgbNavModule,
} from "@ng-bootstrap/ng-bootstrap";
import { SimplebarAngularModule } from "simplebar-angular";
import { TranslateModule } from "@ngx-translate/core";
import { LanguageService } from "src/app/core/services/language.service";
import { FooterComponent } from "./footer/footer.component";
import { HorizontalTopbarComponent } from "./horizontal-topbar/horizontal-topbar.component";
import { TopbarComponent } from "./topbar/topbar.component";
import { TableFilterComponent } from "./table-filter/table-filter.component";
import { NgSelectModule } from "@ng-select/ng-select";
import { NgxSliderModule } from "ngx-slider-v2";

@NgModule({
  declarations: [
    FooterComponent,
    HorizontalTopbarComponent,
    TopbarComponent,
    TableFilterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbDropdownModule,
    NgbNavModule,
    SimplebarAngularModule,
    TranslateModule,
    NgSelectModule,
    NgxSliderModule,
    NgbAccordionModule,
  ],
  exports: [
    TopbarComponent,
    FooterComponent,
    HorizontalTopbarComponent,
    TableFilterComponent,
  ],
  providers: [LanguageService],
})
export class PageSharedModule {}
