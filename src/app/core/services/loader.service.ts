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

  setLoaderVisibility(visibility: boolean) {
    this.loaderVisibility = visibility;
  }
}
