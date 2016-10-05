/**
 * Created by ivetamakedonska on 9/16/16.
 */
import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Likes} from '../likes/likes';
import {Comments} from '../comments/comments';
import {MakeAppointment} from "../makeAppointment/makeAppointment";

@Component({
  templateUrl: 'items.html',
  selector: 'item',
  styles: [`
     .items {
        display: inline-block;
     }

     .item-img {
        border: 1px solid #dedede;
        width: 100%;
        max-width: 7rem;
        max-height: 7rem;
        border-radius: 1rem;
        float: left;
     }

     .item-name {
        font-size:  5vw;
        margin-top: -25%;
        margin-left: 60%;
     }

     .under-name {
        color: #666;
        margin-left: 60%;
     }

     .likes {
       font-size: 6vw;
       margin-left: 75%;
       color: #dedede;
       margin-left: 130%;
       margin-top: -48%;
     }
     .item-workTime {
        color: #666;
        margin-left: 5%;
     }

     .item-more {
        color: #666;
     }
     .item-info {
        font-size: 4.4vw;
        color: #666;
    }

    .likes-and-comments{
        margin-top: -6%;
    }

    .make-appointment {
      margin-top: 4%;
    }
  `]

})
export class Items {
  private item: any;
  private color: any;
  constructor(params: NavParams, public nav: NavController) {
    this.item = params.data.item;
    this.color = params.data.color;

  }

  onButtonLikesClick(likes){
    let data = {
      likes: likes
  }
    this.nav.push(Likes, data);
  }
  onButtonCommentsClick( color, item){
    let data = {

      color: color,
      item: item
    }
    this.nav.push(Comments, data);
  }

  onLikeClick(btn, thisColor, item) {
    if(item.clicked) {
      btn._elementRef.nativeElement.style.color = "#dedede";
      item.likes.length--;
    } else {
      btn._elementRef.nativeElement.style.color = thisColor;
      item.likes.length++;
    }
    item.clicked = !item.clicked;
  }
  makeAppointement(color) {
    let data = {
      color:color
    }
    this.nav.push(MakeAppointment, data);

  }
}
/**
 * Created by ivetamakedonska on 9/24/16.
 */
