import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {List} from '../list/list';
@Component({
  templateUrl: 'subCategory.html',
  selector: 'sub-category',
  styles: [`
   .subCategory-btn {
      min-height: 13vh !important;
      max-height: 13vh !important;
    }
    .sub-icons {
      display: inline;
      /*margin-left:4%;*/
    }
    .subcategory-name {
      display: inline;
      color: white;
      font-size: 5vw;
      margin-left: 5%;
      position: absolute;
      top: 50%;
    }
  `]
})
export class SubCategory {
  private data: any;
  constructor(params: NavParams, public nav: NavController) {
    this.data = params.data;
  }

  openNavDetailsPage(name, color, items){
    let subData = {
      name: name,
      color: color,
      items: items
    }
    this.nav.push(List, subData);
  }
}
