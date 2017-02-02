angular.module('flapperNews')
  .controller('PostsCtrl', [
    '$scope',
    '$stateParams',
    'posts',
    'post',
    function($scope, $stateParams, posts, post){
      $scope.post = post;

      $scope.addComment = function(){
        if($scope.body === '') { return; }
        posts.addComment(post.id, {
          body: $scope.body,
          author: 'user',
        }).then(function(data) {
          $scope.post.comments.push(data.data);
        },function(error) {
          $scope.post.comments.push(comment);
        });
        $scope.body = '';
        $scope.body = '';
      };

      $scope.incrementUpvotes = function(comment){
        posts.voteComment(post, comment, 'up');
      };

      $scope.decrementUpvotes = function(comment){
        posts.voteComment(post, comment, 'down');
      };
    }
  ]);
