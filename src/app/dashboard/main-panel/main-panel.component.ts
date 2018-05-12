import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../_services/api.service';
@Component({
  selector: 'app-main-panel',
  templateUrl: './main-panel.component.html',
  styleUrls: ['./main-panel.component.css']
})
export class MainPanelComponent implements OnInit {
  public burgers = [];
  constructor(private _apiService: ApiService) { }

  ngOnInit() {
    this._apiService.getUserList()
      .subscribe(data => {
        this.burgers = data;
        console.log(this.burgers)
      })

  }

}
