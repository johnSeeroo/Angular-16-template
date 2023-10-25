import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class LoaderService {
  loaderVisibility = false;

  constructor() {}

  getLoaderVisibility() {
    return this.loaderVisibility;
  }

  setLoaderVisibility(visible: boolean) {
    this.loaderVisibility = visible;
  }
}
