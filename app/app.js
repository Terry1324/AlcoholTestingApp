var app = angular.module("app", ['ngMaterial','ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/home.html");
  //
  // Now set up the states
  $stateProvider
    .state('home', {
      url: "/home",
      templateUrl: "partials/home.html"
    })
    .state('Backuptest', {
      url: "/Backuptest",
      templateUrl: "partials/Backuptest.html"
    })
    .state('Video', {
      url: "/Video",
      templateUrl: "partials/Video.html"
    })
    .state('Table', {
      url: "/Table",
      templateUrl: "partials/Table.html"
   
   })
});