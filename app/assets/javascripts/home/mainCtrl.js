angular.module('flapperNews')
  .controller('MainCtrl', [
      '$scope', '$timeout', 'posts',
      function($scope, $timeout, posts){
        // $scope.test = "Hello World!";

        // var change_test = function(){
        //   $scope.test = "Welcome !!!!";
        // };

        // $timeout(change_test, 2000);

        $scope.posts = posts.posts;

        $scope.addPost = function(){
          if(!$scope.title || $scope.title === ""){return;}
          posts.create({
            title: $scope.title,
            link: $scope.link,
          });
          $scope.title = "";
          $scope.link  = "";
        };

        $scope.incrementUpvotes = function(post){
          posts.vote(post, 'up');
        };

        $scope.decrementUpvotes = function(post){
          posts.vote(post, 'down');
        };
      }
    ]);
