import { Component } from "@angular/core";
import { LoaderService } from "./core/services/loader.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "velzon";

  constructor(private loaderService: LoaderService) {}

  showVisibility() {
    return this.loaderService.getLoaderVisibility();
  }
}
