'use strict';

/* Controllers */
function playlistController ($scope) {
	// Models
	$scope.defaultModel = {
		title: undefined,
		created: undefined,
		lastModified: undefined
	};

	$scope.playlists = [
		angular.extend($scope.defaultModel, {title: 'Playlist 1'}),
		angular.extend($scope.defaultModel, {title: 'Playlist 2'})
	];

	// Methods
	$scope.createPlaylist = function (time) {
		$scope.playlists.push(angular.extend($scope.defaultModel, {
			title: $scope.title,
			created: new Date()
		}));
	};
}

function mediaLibraryController ($scope) {
	// Models
	$scope.defaultModel = {
		title: undefined,
		created: undefined,
		lastModified: undefined
	};

	$scope.mediaLibrary = [
		angular.extend($scope.defaultModel, {title: 'Track Title'}),
		angular.extend($scope.defaultModel, {title: 'Track Title'})
	];

	// Methods
}