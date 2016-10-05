import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';


@Component({
  templateUrl: 'message-details.html',
  selector: 'details',
  styles: [`

     .message-img {
        border: 1px solid #dedede;
        width: 100%;
        max-width: 7rem;
        max-height: 7rem;
        border-radius: 1rem;
        float: left;
     }

     .message-name {
        font-size:  5vw;
        margin-top: -12%;
        margin-left: 27%;
     }
      .under-name {
        color: #999;
        margin-left: 27%;
     }

     .message-info {
        font-size: 4.4vw;
        color: #666;
    }
    .message-condition {
      font-size: 6vw !important;
      color: #999;
      display: inline;
      margin-left: 35%;
    }

    .condition-icon {
      font-size: 10vw;
      margin-left: 1%;
    }

  `]
})
export class MessageDetails {
  private message: any;
  constructor(params: NavParams, public nav: NavController) {
    this.message = params.data.message;

  }

}
