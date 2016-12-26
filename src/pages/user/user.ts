import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { NativeStorage, TwitterConnect } from 'ionic-native';
import { LoginPage } from '../login/login';
import { UserModel } from './user.model';

@Component({
  selector: 'page-user',
  templateUrl: 'user.html'
})

export class UserPage {

  user: UserModel = new UserModel();

  constructor(public navCtrl: NavController,
    public loadingCtrl: LoadingController) {}

  ionViewCanEnter(){
    let env = this;
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });

    loading.present();

    NativeStorage.getItem('twitter_user')
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

    TwitterConnect.logout().then(function(response)
    {
      NativeStorage.remove('twitter_user');
      nav.push(LoginPage);
    }, function (error) {
      console.log(error);
    });
  }
}
