/**
 * Created by ivetamakedonska on 9/16/16.
 */
import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {AlertController} from 'ionic-angular';
// import {ConfirmationAlert} from '../ConfirmationAlert/ConfirmationAlert'


@Component({
  templateUrl: 'makeAppointment.html',
  selector: 'make-appointment',
  styles: [`
      ion-list:first-child {
        margin-top: 32px;
      }
      ion-list + ion-list {
        margin-top: 0;
      }
  `]

})
export class MakeAppointment {
  private data: any;
  constructor(params:NavParams, public nav:NavController, public alerCtrl: AlertController) {
    this.data = params.data;
  }

  public event = {
    month: '2016-09-29',
    timeStarts: '10:00'
  }

  confirm(service, date, time, more) {
    let confirm = this.alerCtrl.create({
      title: 'Потвържадаване',
      message: 'Сигурни ли сте, че искате да потвърдите часа си?' + '<br>' +
      'Услуга: '+ service.value + '<br>' +
      'Дата: ' + date._text + '<br>' +
      'Час: ' + time._text + '<br>' +
      'Допълнително информация: ' + more.value,
      buttons: [
        {
          text: 'Отхвърляне',


        },
        {
          text: 'Потвържадаване',
          handler: () => {
            confirm.dismiss().then(() => {
              let confirm = this.alerCtrl.create({
                title : 'Потвърдено',
                message : "Избраният от Вас час беше изпратен за одобрение. Ще получите известие при отговор.",
                buttons: ['ОК']});
              confirm.present();
            })
          }
        }
      ]
    });
    confirm.present()


  }

  getInfo(service, date, time, more) {
    console.log(service.value, date.value, time.value, more.value);
  }
}
/**
 * Created by ivetamakedonska on 9/24/16.
 */
/**
 * Created by ivetamakedonska on 9/28/16.
 */
