import { Component, OnInit } from '@angular/core';
import { UserModel } from './user.model';
import { TwitterConnect } from '@ionic-native/twitter-connect/ngx';
import { Router } from '@angular/router';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  user: UserModel = new UserModel();

  constructor(
    private tw: TwitterConnect,
    private nativeStorage: NativeStorage,
    public loadingController: LoadingController,
    private router: Router
  ) { }

  async ngOnInit() {
    const loading = await this.loadingController.create({
      message: 'Please wait...'
    });
     await loading.present();
     this.nativeStorage.getItem('twitter_user')
    .then(data => {
      this.user = {
        name: data.name,
        userName: data.userName,
        picture: data.picture,
        followers: data.followers
      };
      loading.dismiss();
    }, error => {
      console.log(error);
      loading.dismiss();
    });
  }

  doTwLogout(){
    this.tw.logout().then(response => {
      this.nativeStorage.remove('twitter_user');
      this.router.navigate(["/login"]);
    }, error => {
      console.log(error);
    });
  }

}
