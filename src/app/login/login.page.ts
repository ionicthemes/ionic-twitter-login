import { Component } from '@angular/core';
import { TwitterConnect } from '@ionic-native/twitter-connect/ngx';
import { Router } from '@angular/router';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  constructor(
    private tw: TwitterConnect,
    private nativeStorage: NativeStorage,
    public loadingController: LoadingController,
    private router: Router
  ) { }

  async doTwLogin(){
    const loading = await this.loadingController.create({
      message: 'Please wait...'
    });
    this.presentLoading(loading);
    this.tw.login()
    .then( res => {
      // Get user data
      // There is a bug which fires the success event in the error event.
      // The issue is reported in https://github.com/chroa/twitter-connect-plugin/issues/23
      this.tw.showUser()
      .then(user =>{
        console.log(user);
        loading.dismiss();
      }, err =>{
        console.log(err);
        // default twitter image is too small https://developer.twitter.com/en/docs/accounts-and-users/user-profile-images-and-banners
        var profile_image = err.profile_image_url_https.replace('_normal','');
        this.nativeStorage.setItem('twitter_user', {
          name: err.name,
          userName: err.screen_name,
          followers: err.followers_count,
          picture: profile_image
        })
        .then(() => {
           this.router.navigate(["/user"]);
           loading.dismiss();
        }, (error) => {
          console.log(error);
          loading.dismiss();
        })
      })
    }, err => {
      loading.dismiss();
    })
  }

  async presentLoading(loading) {
    return await loading.present();
  }
}
