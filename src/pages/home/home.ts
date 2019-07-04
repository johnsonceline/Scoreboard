import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ViewPage } from '../view/view';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  ScoreboardPage(){
    this.navCtrl.push( ViewPage);
  }
}
