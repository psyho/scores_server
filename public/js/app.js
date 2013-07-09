(function() {

  var app = angular.module('scores', ['ng']);

  app.factory('teams', function($rootScope) {
    var teams = [];

    var client = new Faye.Client('/faye', {
      timeout: 120
    });

    var subscription = client.subscribe('/teams', function(team) {
      $rootScope.$apply(function() {
        teams.remove(function(t) {
          return t.name === team.name;
        });

        teams.push(team);
      });
    });

    return teams;
  });

  app.controller('ScoresController', function($scope, teams) {
    $scope.teams = teams;
  });
})();
