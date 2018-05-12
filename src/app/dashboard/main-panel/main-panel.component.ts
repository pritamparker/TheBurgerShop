import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../_services/api.service';
import { DataService } from '../../_services/data.service';
@Component({
  selector: 'app-main-panel',
  templateUrl: './main-panel.component.html',
  styleUrls: ['./main-panel.component.css']
})
export class MainPanelComponent implements OnInit {
  public burgers = [];
  public filterBurgers = [];
  public orderBurgers = [];
  searchText: string;
  message: Object = { 'type': '', 'value': '' };
  constructor(private _apiService: ApiService, private data: DataService) { }

  ngOnInit() {
    this._apiService.getUserList()
      .subscribe(data => {
        this.burgers = data;
        this.filterBurgers = data;
        console.log(this.burgers)
      })
    this.data.currentMessage.subscribe(message => this.message = message)

  }
  search(e) {
    console.log(e)

  }
  filterForCategory(e) {
    this.burgers = this.filterBurgers;
    if (e == 'veg') {
      this.burgers = this.burgers.filter(function (el) {
        return el.category == 'veg';
      })
    }
    else if (e == 'nonVeg') {
      this.burgers = this.burgers.filter(function (el) {
        return el.category == 'nonVeg';
      })
    } else {
      this.burgers = this.filterBurgers;
    }
  }
  filterForRating(e) {
    this.burgers = this.filterBurgers;
    if (e > 0) {
      this.burgers = this.burgers.filter(function (el) {
        return el.rating == e;
      })
    } else {
      this.burgers = this.filterBurgers;
    }
  }
  filterForPrice(e) {
    console.log(e)
    this.burgers = this.filterBurgers;
    switch (e) {
      case "1":
        console.log("1 me ")
        this.burgers = this.burgers.filter(function (el) {
          return el.price > 0 && el.price <= 100;
        })
        break;
      case "2":
        this.burgers = this.burgers.filter(function (el) {
          return el.price > 100 && el.price <= 200;
        })
        break;
      case "3":
        this.burgers = this.burgers.filter(function (el) {
          return el.price > 200 && el.price <= 300;
        })
        break;
      case "4":
        this.burgers = this.burgers.filter(function (el) {
          return el.price > 300 && el.price <= 400;
        })
        break;
      case "5":
        this.burgers = this.burgers.filter(function (el) {
          return el.price > 400 && el.price <= 500;
        })
        break;
      default:
        this.burgers = this.filterBurgers;
    }
  }
  updateSummary(e) {
    console.log(e)
    this.orderBurgers.push(e);
  }
  orderConfirm() {
    alert("Your order will be delivered in 30 minutes")
  }
}
