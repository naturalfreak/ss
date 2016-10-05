/**
 * Created by ivetamakedonska on 9/26/16.
 */
import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

@Component({
  templateUrl: 'likes.html',
  selector: 'likes',
  styles: [`
     .avatar {
        border-radius: 1rem;
        border: 1px solid #dedede;
        max-width: 5rem;
        max-height: 5rem;
     }

     .name {
       /*font-size: 4.3vw;*/
     }
  `]

})
export class Likes {
  private data: any;
  constructor(params: NavParams, public nav: NavController) {
    this.data = params.data;

  }
}
/**
 * Created by ivetamakedonska on 9/24/16.
 */
