import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { UserPage } from '../user/user';
import { TwitterConnect } from '@ionic-native/twitter-connect';
import { NativeStorage } from '@ionic-native/native-storage';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(
    public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public tw: TwitterConnect,
    public nativeStorage: NativeStorage) {}

  doTwLogin(){
    let nav = this.navCtrl;
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });

    loading.present();
    let env = this;
    //Request for login
    this.tw.login().then(function(result) {
      //Get user data
      env.tw.showUser().then(function(user){
        //Save the user data in NativeStorage
        env.nativeStorage.setItem('twitter_user',
        {
          name: user.name,
          userName: user.screen_name,
          followers: user.followers_count,
          picture: user.profile_image_url_https
        }).then(function() {
          nav.push(UserPage);
        })
      }, function(error){
        loading.dismiss();
      });
    });
  }
}
