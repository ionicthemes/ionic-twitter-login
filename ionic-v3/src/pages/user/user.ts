import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { UserModel } from './user.model';
import { TwitterConnect } from '@ionic-native/twitter-connect';
import { NativeStorage } from '@ionic-native/native-storage';

@Component({
  selector: 'page-user',
  templateUrl: 'user.html'
})

export class UserPage {

  user: UserModel = new UserModel();

  constructor(
    public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public tw: TwitterConnect,
    public nativeStorage: NativeStorage) {}

  ionViewCanEnter(){
    let env = this;
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });

    loading.present();

    this.nativeStorage.getItem('twitter_user')
    .then(function (data){
      env.user = {
        name: data.name,
        userName: data.userName,
        picture: data.picture,
        followers: data.followers
      };
      loading.dismiss();
    }, function(error){
      console.log(error);
      loading.dismiss();
    });
  }

  doTwLogout(){
    let nav = this.navCtrl;
    let env = this
    this.tw.logout().then(function(response)
    {
      env.nativeStorage.remove('twitter_user');
      nav.push(LoginPage);
    }, function (error) {
      console.log(error);
    });
  }
}
