import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ScoreboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-scoreboard',
  templateUrl: 'scoreboard.html',
})
export class ScoreboardPage {
  plus15: any;
  love: boolean;
  love1: boolean; 
  obj: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.plus15 = null;
  this.obj = null;
  this.love = true;
  this.love1= true;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScoreboardPage');
  }
  //LEFT SIDE

  heart() {
    this.love = true;
    this.plus15 = null;
  }

  plus(){
    this.plus15 = this.plus15+15;
    this.love = false;
  }
  plus2() {
    this.plus15 = this.plus15+30;
    this.love = false;
  }
  plus3() {
    this.plus15 = this.plus15+40;
    this.love = false;
  }
  reset()
  {
    this.plus15 = null;
    this.love = true;
    this.obj = null;
    this.love1 = true;
  }


//RIGHT SIDE

heart1() {
this.love1 = true;
this.obj = null;
}
plus1(){
 this.obj = this.obj+15;
 this.love1 = false;

}
pluss() {
 this.obj = this.obj+30;
 this.love1 = false;
}
plusss() {
 this.obj = this.obj+40;
 this.love1 = false;
}
home(){
  this.navCtrl.push(HomePage);
}
}
