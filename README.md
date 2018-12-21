# Twitter Authentication in Ionic 4 Apps

This repo is an Ionic v4 starter app to show you how to add Twitter Native Log In to an Ionic App. There is also a [detailed tutorial](https://ionicthemes.com/tutorials/about/ionic-twitter-login) to help you with the Twitter App setup and with the step by step of building this Ionic Framework app.


For this Ionic example app we are going to build a simple ionic 4 app that allows users to log in using their Twitter account. Once they log in, they will see a home page with their basic profile info.

<div>
<img src="https://s3-us-west-2.amazonaws.com/ionicthemes/tutorials/screenshots/ionic-twitter-login/twitter-login-1.png" width="270">
<img src="https://s3-us-west-2.amazonaws.com/ionicthemes/tutorials/screenshots/ionic-twitter-login/twitter-login-2.png" width="270">
<img src="https://s3-us-west-2.amazonaws.com/ionicthemes/tutorials/screenshots/ionic-twitter-login/twitter-login-3.png" width="270">
</div>

**Note:** This code is for Ionic v4.
- If you are working with Ionic v3 go to [ionic-v3 branch](https://github.com/ionicthemes/ionic-twitter-login/tree/master/ionic-v3).



## Installation of this app

### Install node dependencies
`$ npm install`

### Add Twitter plugin
`$ ionic cordova plugin add https://github.com/chroa/twitter-connect-plugin --variable FABRIC_KEY=<YOUR_FABRIC_KEY> --variable TWITTER_KEY=<YOUR_TWITTER_KEY> --variable TWITTER_SECRET=<YOUR_TWITTER_SECRET_KEY>
`

## Running the app

### To run the app on your browser
`$ ionic serve`

### To run the app on iOS
Follow the steps from https://beta.ionicframework.com/docs/building/ios

`$ ionic cordova prepare ios`

### To run the app on Android
Follow the steps from https://beta.ionicframework.com/docs/building/android

`$ ionic cordova prepare android`
`$ ionic cordova run android`
