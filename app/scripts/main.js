(function(window) {
  // with JQuery
  // $('main.container').load('views/repositories.html');

  var app = angular.module('tiy-gradebook', [ ]);

  app.controller('MainController', function() {
    this.view = null;
    this.page = function(name){
      this.view = "views/404.html"
      if ( name == 'milestones'){
        this.viewToRender = 'views/milestones.html';
      }
      if ( name == 'repositories'){
        this.view = 'views/repositories.html';
      }
    }
  });
})(window);
