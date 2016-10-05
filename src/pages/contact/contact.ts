import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {MessagesService} from '../../services/messagesService';
import {MessageDetails} from '../message-details/message-details';


@Component({
  templateUrl: 'contact.html',
  selector: 'contacts',
  styles: [`
    .avatar {
        border-radius: 1rem;
        border: 1px solid #dedede;
        max-width: 6rem;
        max-height: 6rem;
     }
     .time {
        font-size: 3.9vw;
     }

     ion-input .text-input {
        width: 80.5%;
     }
     .message-icon {
        float: right;
        margin-top: -15% !important;
        font-size: 13vw !important;
     }

     .condition {
        float: right;
        margin-top: 3%;
        margin-right: -14%;
        font-size: 3.5vw;
        color: #999;
     }

  `]
})
export class ContactPage {
  private messages: Array<any>;
  constructor(public nav: NavController,  private _messages: MessagesService) {
    this.messages = this._messages.getMessages();
  }

  onMessageClick(message){
    let data = {
      message: message
    }
    this.nav.push(MessageDetails, data);
  }
}
