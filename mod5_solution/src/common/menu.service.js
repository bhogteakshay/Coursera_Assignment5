(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;

  var favMenuItem = [];

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };


  service.getMenuItem = function (shortname) {
    var config = {};

    return $http.get(ApiPath + '/menu_items/' + shortname + '.json', config).then(function (response) {
      return response.data;
    },function error(errorResponse) {
          return errorResponse;
    });
  };

  service.saveFavoriteMenu = function (favItem) {
      favMenuItem = [];
      favMenuItem.push(favItem);
      return favMenuItem.length;
  };

  service.getRegisteredInfo = function () {
    return  favMenuItem[0];
  };

}



})();
