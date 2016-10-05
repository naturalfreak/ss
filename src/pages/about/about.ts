import { Component } from '@angular/core'
import { NavController } from 'ionic-angular';
import { SettingsService } from '../../services/settingsService';
import { UserModel } from "../../models/userModel";

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
  styles: [`
     .avatar {
        border-radius: 1rem;
        border: 1px solid #dedede;
        max-width: 8rem;
        max-height: 8rem;
        margin-left: 36%;
     }

     .change-photo {
       margin-left: 31%;
       font-size: 3.7vw;
     }

     .header {
        color: #858585;
     }

     .icon {
        color: #dedede;
        margin-right: -7%;
     }

     .save {
        margin-top: 5%;
        width: 110%;
        margin-left: -5%;
     }
  `]
})
export class AboutPage {
  private user: UserModel;
  constructor(private navCtrl: NavController,  private _user: SettingsService) {
    this.user = this._user.getUser();
  }
}
