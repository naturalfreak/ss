/**
 * Created by ivetamakedonska on 9/16/16.
 */
import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Items} from '../items/items';
import {Search} from '../search/search';
import {Filter} from '../filter/filter';

@Component({
  templateUrl: 'list.html',
  selector: 'list',
  styles: [`
   .list-btn {
      min-height: 17.5vh !important;
      max-height: 13vh !important;
      border-bottom: 1px solid #dedede;
      padding: 0;
    }

      #filter {
       margin: 0;
       margin-right: -1%;
       width: 50%;
      }

      #search {
       margin: 0;
       width: 50%;
      }
      .items {
      display: inline-block !important;
      }
      .item-img {
        float: left;
        width: 33%;
        height: 20%;
        border: 1px solid #dedede;
      }
      .item-info {
        margin-left: 36%;
        margin-top: 3%;
        font-size: 4.4vw;
      }
      .comments {
        margin-left: 4%;
        margin-top: 2.5%;
      }

      .likes {
       margin-top: -16%;
       font-size: 9vw;
       color: #dedede;
    }

    .count-likes {
      font-size: 3vw;
      margin-top: 82%;
      margin-left: -61%;
      color: #dedede;
    }
  `]
})
export class List {
  private subData: any;
  constructor(params: NavParams, public nav: NavController) {
    this.subData = params.data;
  }

  openNavDetailsPage(item, color)
  {
    let data = {
      item: item,
      color: color
    }
    this.nav.push(Items, data);
  }

  onLikeClick(btn, thisColor, like, item) {
    if(item.clicked) {
      btn._elementRef.nativeElement.style.color = "#dedede";
      like.style.color = "#dedede";
      item.likes.length--;
    } else {
      btn._elementRef.nativeElement.style.color = thisColor;
      like.style.color = thisColor;
      item.likes.length++;
    }
    item.clicked = !item.clicked;
  }


  onSearchClick(items) {
    let data = {
      items: items
    }
    this.nav.push(Search, data);
  }

  onFilterClick(color) {
    let data = {
      color: color
    }
    this.nav.push(Filter, data);
  }
}
