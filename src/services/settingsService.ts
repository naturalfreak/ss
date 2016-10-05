import {Injectable} from '@angular/core';
import {UserModel} from '../models/userModel';

@Injectable()
export class SettingsService {

  private user: UserModel;



  constructor() {
    this.user = new UserModel(
      1,
      'Ивета Македонска',
      '/img/subCategories/beauty/list/shik.png',
      'ivetamakedonska@gmail.com',
      '11111',
      'user',
      '+359894664327'
    )
  }

  getUser() {
    return this.user;
  }

}
