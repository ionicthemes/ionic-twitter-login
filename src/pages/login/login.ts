import { Component } from '@angular/core';
import { NativeStorage, TwitterConnect } from 'ionic-native';
import { NavController, LoadingController } from 'ionic-angular';
import { UserPage } from '../user/user';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController,
    public loadingCtrl: LoadingController) {}

  doTwLogin(){
    let nav = this.navCtrl;
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });

    loading.present();

    //Request for login
    TwitterConnect.login().then(function(result) {
      //Get user data
      TwitterConnect.showUser().then(function(user){
        //Save the user data in NativeStorage
        NativeStorage.setItem('twitter_user',
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
