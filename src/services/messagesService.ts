import {Injectable} from '@angular/core';
import {MessageModel} from '../models/messageModel';

@Injectable()
export class MessagesService {

  private messages:Array<MessageModel>;



  constructor() {
    this.messages = [
      new MessageModel(
        1,
        'Студио ШИК',
        '/img/subCategories/beauty/list/shik.png',
        'Подстригване',
        '29/10/2016',
        '17:30',
        'Салонът е тдада дад да дад ад дадд адад ',
        'checkmark-circle',
        '#32CD32',
        'Приет',
        'преди 2 часа'
      ),
      new MessageModel(
        2,
        'Студио за татуировки',
        '/img/subCategories/beauty/list/shik.png',
        'Пиърсинг',
        '29/10/2016',
        '17:30',
        '',
        'close-circle',
        'red',
        'Отхвърлен',
        'преди 6 часа'
      ),
      new MessageModel(
        3,
        'Козметичен салон',
        '/img/subCategories/beauty/list/shik.png',
        'Почистване на лице',
        '29/10/2016',
        '18:30',
        '',
        'time',
        '#4db8ff',
        'Чакащ',
        'вчера в 18:32'
      )
    ]
  }

  getMessages() {
    return this.messages;
  }

}
