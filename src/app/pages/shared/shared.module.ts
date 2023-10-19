import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { NgbDropdownModule, NgbNavModule } from "@ng-bootstrap/ng-bootstrap";
import { SimplebarAngularModule } from "simplebar-angular";
import { TranslateModule } from "@ngx-translate/core";
import { LanguageService } from "src/app/core/services/language.service";
import { FooterComponent } from "./footer/footer.component";
import { HorizontalTopbarComponent } from "./horizontal-topbar/horizontal-topbar.component";
import { TopbarComponent } from "./topbar/topbar.component";
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [FooterComponent, HorizontalTopbarComponent, TopbarComponent, SidebarComponent],
  imports: [
    CommonModule,
    RouterModule,
    NgbDropdownModule,
    NgbNavModule,
    SimplebarAngularModule,
    TranslateModule,
  ],
  exports: [TopbarComponent, FooterComponent, HorizontalTopbarComponent],
  providers: [LanguageService],
})
export class PageSharedModule {}
