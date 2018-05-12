import { Component, OnInit, Input } from '@angular/core';
import { Burgers } from '../../../_models/burgers';

@Component({
  selector: 'app-single-item',
  templateUrl: './single-item.component.html',
  styleUrls: ['./single-item.component.css']
})
export class SingleItemComponent implements OnInit {
  @Input() recipe: Burgers;
  @Input() index: number;
  constructor() { }

  ngOnInit() {
  }

}
