// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic','ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})


.controller('SampleCtrl', function($scope, $window,$cordovaGeolocation) {
        $scope.checkGPS=function(){
          var posOptions = {timeout: 2500, enableHighAccuracy: false};
          $cordovaGeolocation
            .getCurrentPosition(posOptions)
            .then(function (position) {
              var lat  = position.coords.latitude;
              var long = position.coords.longitude;
              alert("lat"+lat);
              alert("long"+long);
            }, function(err) {
                alert("please turn on the GPS") 
                // if geolocation is turned off fallback to native settings to turn it on
                if(typeof cordova.plugins.settings.openSetting != undefined){
                    cordova.plugins.settings.open(function(){
                            //console.log("opened native settings")
                        },
                        function(){
                           alert("failed to open settings")
                        });
                }
            });
        }  
})