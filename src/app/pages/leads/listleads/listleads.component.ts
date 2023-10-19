import {
  Component,
  QueryList,
  ViewChildren,
  Input,
  TemplateRef,
} from "@angular/core";
import { DecimalPipe } from "@angular/common";
import { Observable } from "rxjs";
import {
  NgbModal,
  NgbNavChangeEvent,
  NgbAccordionModule,
  NgbOffcanvas,
} from "@ng-bootstrap/ng-bootstrap";
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  FormArray,
  FormControl,
  Validators,
} from "@angular/forms";
// Date Format
import { DatePipe } from "@angular/common";

// Csv File Export
import { ngxCsv } from "ngx-csv/ngx-csv";

// Sweet Alert
import Swal from "sweetalert2";
import { restApiService } from "../../../core/services/rest-api.service";
import { ListleadsService } from "./listleads.service";
import { GlobalComponent } from "src/app/global-component";

@Component({
  selector: "app-listleads",
  templateUrl: "./listleads.component.html",
  styleUrls: ["./listleads.component.scss"],
})
export class ListleadsComponent {
  constructor(private offcanvasService: NgbOffcanvas) {}

  openEnd(content: TemplateRef<any>) {
    this.offcanvasService.open(content, { position: "end" });
  }

  onSettingsButtonClicked() {
    document.body.classList.toggle("right-bar-enabled");
    const rightBar = document.getElementById(
      "theme-settings-offcanvas-addleads"
    );
    if (rightBar != null) {
      rightBar.classList.toggle("show");
      rightBar.setAttribute("style", "visibility: visible;");
    }
  }
}
