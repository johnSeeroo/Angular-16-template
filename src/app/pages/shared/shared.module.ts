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
import { FormsModule } from "@angular/forms";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { NotesComponent } from './common/notes/notes.component';
import { TimelineComponent } from './common/timeline/timeline.component';
import { ActivitiesComponent } from './common/activities/activities.component';

@NgModule({
  declarations: [
    FooterComponent,
    HorizontalTopbarComponent,
    TopbarComponent,
    TableFilterComponent,
    SidebarComponent,
    NotesComponent,
    TimelineComponent,
    ActivitiesComponent,
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
    FormsModule,
  ],
  exports: [
    TopbarComponent,
    FooterComponent,
    HorizontalTopbarComponent,
    TableFilterComponent,
    SidebarComponent,
    NotesComponent,
    TimelineComponent,
    ActivitiesComponent
  ],
  providers: [LanguageService],
})
export class PageSharedModule {}
