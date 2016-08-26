angular.module('starter.controllers', ['angularSoundManager'])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later

  $scope.openModal = function(targetUrl) {
	  $ionicModal
	  .fromTemplateUrl(targetUrl, {
		scope: $scope
	  })
	  .then(function(modal) {
		$scope.modal = modal;
		$scope.modal.show();
	  });
	}

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
	$scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
	$scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
	console.log('Doing login', $scope.loginData);

	// Simulate a login delay. Remove this and replace with your login
	// code if using a login system
	$timeout(function() {
	  $scope.closeLogin();
	}, 1000);
  };

})

.controller('PlaylistsCtrl', function($scope) {
	$scope.playlists = [
		{ title: 'Reggae', id: 1 },
		{ title: 'Chill', id: 2 },
		{ title: 'Dubstep', id: 3 },
		{ title: 'Indie', id: 4 },
		{ title: 'Rap', id: 5 },
		{ title: 'Cowbell', id: 6 }
	];
})

.controller('myListCtrl', function($scope) {
	$scope.songs = [
	    {
	        id: 'one',
	        title: 'Rain',
	        artist: 'Drake',
	        url: 'http://www.schillmania.com/projects/soundmanager2/demo/_mp3/rain.mp3'
	    },
	    {
	        id: 'two',
	        title: 'Walking',
	        artist: 'Nicki Minaj',
	        url: 'http://www.schillmania.com/projects/soundmanager2/demo/_mp3/walking.mp3'
	    },
	    {
	        id: 'three',
	        title: 'Barrlping with Carl (featureblend.com)',
	        artist: 'Akon',
	        url: 'http://www.freshly-ground.com/misc/music/carl-3-barlp.mp3'
	    },
	    {
	        id: 'four',
	        title: 'Angry cow sound?',
	        artist: 'A Cow',
	        url: 'http://www.freshly-ground.com/data/audio/binaural/Mak.mp3'
	    },
	    {
	        id: 'five',
	        title: 'Things that open, close and roll',
	        artist: 'Someone',
	        url: 'http://www.freshly-ground.com/data/audio/binaural/Things%20that%20open,%20close%20and%20roll.mp3'
	    }
	];
});
