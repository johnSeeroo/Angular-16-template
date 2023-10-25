import { Component } from "@angular/core";
import {
  DATA_PRELOADER,
  LAYOUT_MODE,
  LAYOUT_POSITION,
  LAYOUT_WIDTH,
  SIDEBAR_VIEW,
  TOPBAR,
} from "./pages.model";

@Component({
  selector: "app-pages",
  templateUrl: "./pages.component.html",
  styleUrls: ["./pages.component.scss"],
})
export class PagesComponent {
  ngOnInit(): void {
    document.documentElement.setAttribute("data-layout", "horizontal");
    document.documentElement.setAttribute("data-topbar", TOPBAR);
    document.documentElement.setAttribute("data-layout-style", SIDEBAR_VIEW);
    document.documentElement.setAttribute("data-bs-theme", LAYOUT_MODE);
    document.documentElement.setAttribute("data-layout-width", LAYOUT_WIDTH);
    document.documentElement.setAttribute(
      "data-layout-position",
      LAYOUT_POSITION
    );
    document.documentElement.setAttribute("data-preloader", DATA_PRELOADER);
  }

  /**
   * On mobile toggle button clicked
   */
  onToggleMobileMenu() {
    if (document.documentElement.clientWidth <= 1024) {
      document.body.classList.toggle("menu");
    }
  }
}
