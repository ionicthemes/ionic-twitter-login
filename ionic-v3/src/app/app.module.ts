import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { UserPage } from '../pages/user/user';
import { TwitterConnect } from '@ionic-native/twitter-connect';
import { SplashScreen} from "@ionic-native/splash-screen";
import { StatusBar} from "@ionic-native/status-bar";
import { NativeStorage } from '@ionic-native/native-storage';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    UserPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    UserPage
  ],
  providers: [
    TwitterConnect,
    SplashScreen,
    StatusBar,
    NativeStorage
  ]
})
export class AppModule {}
