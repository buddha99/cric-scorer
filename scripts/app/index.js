var app = angular.module('cric-scorer', ['ui.bootstrap', 'ngRoute']);

app.config(function($routeProvider){
    $routeProvider.when('/', {
        controller: 'main',
        templateUrl: 'views/mainContent.html'
    });
});

app.controller('main', function($scope, $routeParams){
    $scope.matchStates = ['Scheduled', 'InProgess', 'Break', 'Stumps', 'Abandoned', 'Over', 'TBD'];
    $scope.activeplayers = {};
    $scope.activeplayers.striker = "Subir";
    $scope.activeplayers.nonstriker = "Sid";
    $scope.activeplayers.bowler = "Steyn";
    
    $scope.over = {};
    $scope.over.overInProgress = 1;
    $scope.over.balls = [1, 2, 1, 'W', 'NB', 'Wd', 6, 'NB', 'NB', 1];
    
    $scope.extras = {};
    $scope.extras.totalExtras = 10;
    $scope.extras.totalWides = 4;
    $scope.extras.totalNoBalls = 3;
    $scope.extras.totalByes = 2;
    $scope.extras.totalLegByes = 6;
    
    $scope.ballInProgress = 3;
    $scope.runNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    $scope.ballModifiers = ['Wide', 'No-Ball', 'Dead'];
    $scope.wicketTypes = ['BLD', 'Caught', 'Caught-C/O', 'Stmpd', 'R/O', 'H/W'];
    
    $scope.ballUpdate = function(run, modifier, wicket){
        alert("Run: " + run + "\nModifier: " + modifier + "\nWicket: " + wicket);
    }
});