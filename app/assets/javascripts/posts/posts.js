angular.module('flapperNews')
  .factory('posts', ['$http', function($http){
      var o = {
        posts: [
        ]
      };
      o.getAll = function() {
        return $http.get('/posts.json').then(function(data){
           angular.copy(data.data, o.posts);
         },function (error){

         });
      };
      o.create = function(post) {
        return $http.post('/posts.json', post).then(function(data){
          console.log(data)
          o.posts.push(data.data);
        }, function(error){

        });
      };
      o.vote = function(post, decider) {
        var action = decider+"vote.json";
        return $http.put('/posts/' + post.id + '/' + action)
          .then(function(data){
            (decider == 'up') ? post.upvotes += 1 : post.upvotes -= 1;
          }, function(error){

          });
      };
      o.get = function(id) {
        return $http.get('/posts/' + id + '.json').then(function(res){
          return res.data;
        });
      };
      o.addComment = function(id, comment) {
        return $http.post('/posts/' + id + '/comments.json', comment);
      };
      o.voteComment = function(post, comment, decider) {
        var action = decider+"vote.json";
        return $http.put('/posts/' + post.id + '/comments/'+ comment.id + '/' + action)
          .then(function(data){
            (decider == 'up') ? comment.upvotes += 1 : comment.upvotes -= 1;
          },function(error){

          });
      };
      return o;
    }]);
