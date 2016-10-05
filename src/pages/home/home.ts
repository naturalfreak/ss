import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {SubCategory} from '../subCategory/subCategory';
import {CategoryModel} from '../../models/categoryModel';
import {CategoryService} from '../../services/categoryService';
import {Search} from '../search/search';


@Component({
    templateUrl: 'home.html',
    selector:'home',
    styles: [`
      .logo {
         display: inline;
         margin-left: 25%;;
      }
      .search {
        display: inline;
        float: right;
      }
      .home-page-categories-btn {
         width: 50%;
         min-height: 20.5vh !important;
         max-height: 20.5vh !important;

         display: inline;
         border: 0px !important;
         border-top: 0px !important;
       }
       .icons {
         width: 60%;
         margin-left: auto;
         margin-right: auto;
         display: block;
       }
       .category-names {
         color: white;
         text-align: center;
         margin-top: 5%;
         font-size: 4vw;
       }

    `]
})
export class HomePage {

  constructor(public nav: NavController, private _category: CategoryService) {

  }

  openNavDetailsPage(name, color, items){
    let data = {
      name: name,
      color: color,
      items: items
    }
    this.nav.push(SubCategory, data);
  }

  onSearchClick(items) {

    this.nav.push(Search);
  }

}
