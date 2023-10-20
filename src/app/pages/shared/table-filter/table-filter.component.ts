import { Component } from "@angular/core";
import { Options } from "ngx-slider-v2";
import { Observable } from "rxjs";
import { AdvancedService } from "src/app/pages/ecommerce/products/products.service";
import { FILTERDATA } from "./filterData";

@Component({
  selector: "app-table-filter",
  templateUrl: "./table-filter.component.html",
  styleUrls: ["./table-filter.component.scss"],
})
export class TableFilterComponent {
  products!: any;
  user = [];
  Brand: any = [];
  Rating: any = [];
  discountRates: number[] = [];
  total: any;
  totalbrand: any;
  totalrate: any;
  totaldiscount: any;
  allproduct: any;

  allproducts: any;
  activeindex = "1";
  allpublish: any;
  grocery: any = 0;
  fashion: any = 0;
  watches: any = 0;
  electronics: any = 0;
  furniture: any = 0;
  accessories: any = 0;
  appliance: any = 0;
  kids: any = 0;
  totalpublish: any = 0;

  // Table data
  productList!: Observable<any>;
  // allproductList!: Observable<productModel[]>;
  // total$: Observable<number>;
  searchproducts: any;
  publishedproduct: any;

  // constructor(public service: AdvancedService) {
  //   // this.productList = service.countries$;
  //   // this.allproductList = service.allproduct$;
  //   // this.total$ = service.total$;
  // }

  // Price Slider
  minValue = 0;
  maxValue = 1000;
  options: Options = {
    floor: 0,
    ceil: 1000,
  };

  /**
   * Default Select2
   */
  multiDefaultOption = "Watches";
  selectedAccount = "This is a placeholder";
  Default = [{ name: "Watches" }, { name: "Headset" }, { name: "Sweatshirt" }];
  filterContent = FILTERDATA;

  // Check Box Checked Value Get
  checkedValGet: any[] = [];
  // Select Checkbox value Get
  onCheckboxChange(e: any) {
    var checkboxes: any = document.getElementsByName("checkAll");
    var checkedVal: any[] = [];
    var result;
    for (var i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
        result = checkboxes[i].value;
        checkedVal.push(result);
      }
    }
    this.checkedValGet = checkedVal;
    var checkBoxCount: any = document.getElementById(
      "select-content"
    ) as HTMLElement;
    checkBoxCount.innerHTML = checkedVal.length;
    checkedVal.length > 0
      ? ((
          document.getElementById("selection-element") as HTMLElement
        ).style.display = "block")
      : ((
          document.getElementById("selection-element") as HTMLElement
        ).style.display = "none");
  }
  /**
   * Brand Filter
   */
  changeBrand(e: any) {
    if (e.target.checked) {
      this.Brand.push(e.target.defaultValue);
    } else {
      for (var i = 0; i < this.Brand.length; i++) {
        if (this.Brand[i] === e.target.defaultValue) {
          this.Brand.splice(i, 1);
        }
      }
    }
    this.totalbrand = this.Brand.length;
  }

  /**
   * Discount Filter
   */
  changeDiscount(e: any) {
    if (e.target.checked) {
      this.discountRates.push(e.target.defaultValue);

      this.productList.subscribe((x) => {
        this.products = x.filter((product: any) => {
          return product.rating > e.target.defaultValue;
        });
      });
    } else {
      for (var i = 0; i < this.discountRates.length; i++) {
        if (this.discountRates[i] === e.target.defaultValue) {
          this.discountRates.splice(i, 1);
        }
      }
    }
    this.totaldiscount = this.discountRates.length;
  }

  /**
   * Rating Filter
   */
  changeRating(e: any, rate: any) {
    if (e.target.checked) {
      this.Rating.push(e.target.defaultValue);
    } else {
      for (var i = 0; i < this.Rating.length; i++) {
        if (this.Rating[i] === e.target.defaultValue) {
          this.Rating.splice(i, 1);
        }
      }
    }
    this.totalrate = this.Rating.length;
  }

  /**
   * Product Filtering
   */
  changeProducts(e: any, name: any, category: any) {
    const iconItems = document.querySelectorAll(".filter-list");
    iconItems.forEach((item: any) => {
      var el = item.querySelectorAll("a");
      el.forEach((item: any) => {
        var element = item.querySelector("h5").innerHTML;
        if (element == category) {
          item.classList.add("active");
        } else {
          item.classList.remove("active");
        }
      });
    });
  }

  /**
   * Search Product
   */
  search(value: string) {
    if (this.activeindex == "1") {
      if (value) {
        this.products = this.allproducts.filter((val: any) =>
          val.category.toLowerCase().includes(value)
        );
        this.total = this.products.length;
      } else {
        this.products = this.searchproducts;
        this.total = this.allproducts.length;
      }
    } else if (this.activeindex == "2") {
      if (value) {
        this.publishedproduct = this.publishedproduct.filter((val: any) =>
          val.category.toLowerCase().includes(value)
        );
        this.total = this.publishedproduct.length;
      } else {
        this.publishedproduct = this.allpublish;
        this.total = this.publishedproduct.length;
      }
    }
  }

  /**
   * Range Slider Wise Data Filter
   */
  valueChange(value: number, boundary: boolean): void {
    if (value > 0 && value < 1000) {
      if (this.activeindex == "1") {
        if (boundary) {
          this.minValue = value;
        } else {
          this.maxValue = value;
        }
      } else if (this.activeindex == "2") {
        if (boundary) {
          this.minValue = value;
        } else {
          this.maxValue = value;
        }
      }
    }
  }

  clearall(ev: any) {
    this.minValue = 0;
    this.maxValue = 1000;
    var checkboxes: any = document.getElementsByName("checkAll");
    for (var i = 0; i < checkboxes.length; i++) {
      checkboxes[i].checked = false;
    }
    this.totalbrand = 0;
    this.totaldiscount = 0;
    this.totalrate = 0;
    this.Brand = [];
    this.Rating = [];
    this.discountRates = [];
    const iconItems = document.querySelectorAll(".filter-list");
    iconItems.forEach((item: any) => {
      var el = item.querySelectorAll("a");
      el.forEach((item: any) => {
        item.classList.remove("active");
      });
    });
  }
}
