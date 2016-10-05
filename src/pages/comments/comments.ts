/**
 * Created by ivetamakedonska on 9/26/16.
 */
import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {CommentsModel} from '../../models/commentsModel';


@Component({
  templateUrl: 'comments.html',
  selector: 'comments',
  styles: [`
     .avatar {
        border-radius: 1rem;
        border: 1px solid #dedede;
        max-width: 5rem;
        max-height: 5rem;
     }
     .note {
        font-size: 3.7vw;
     }
     .comment-input {
        display: inline;
     }
     ion-input .text-input {
        width: 80.5%;
     }

     .input-div {
        border: 1px solid #dedede;
     }

     .send {
        margin: 0;
        position: absolute;
        height: 4.1rem;
        width: 15%;
     }
  `]

})
export class Comments {
  private data: any;
  constructor(params: NavParams, public nav: NavController) {
    this.data = params.data;
    console.log(this.data);

  }

  addComment(comment) {
    if(comment.value.length > 0) {
      this.data.item.comments.push(
        new CommentsModel(1, 'Ивета Македонска',  comment.value,
        '/img/subCategories/beauty/list/shik.png', 'преди 10 часа'
        )
      )
      comment.value = '';
    }
  }
}
/**
 * Created by ivetamakedonska on 9/24/16.
 */
/**
 * Created by ivetamakedonska on 9/26/16.
 */
