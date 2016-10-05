/**
 * Created by ivetamakedonska on 9/16/16.
 */
import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';


@Component({
  templateUrl: 'filter.html',
  selector: 'filter',
  styles: [`
    .check {
      color: #999
    }
  `]
})
export class Filter {
  private data: any;
  constructor(params: NavParams, public nav: NavController) {
    this.data = params.data;
  }

  public event = {
    timeStarts: '10:00',
    minTime: '00:00',
    maxTime: '23:59'
  }
}
