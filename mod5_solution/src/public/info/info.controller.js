(function () {
  'use strict';

  angular.module('public')
  .controller('infoController', infoController);

infoController.$inject = ['MenuService']
  function infoController(MenuService){

      var $ctrl = this;


      var registeredInfo = MenuService.getRegisteredInfo();

      if(registeredInfo)
      {
            $ctrl.notSignedUp= "";
            
            // personal info
            $ctrl.firstName = registeredInfo.firstName;
            $ctrl.lastName = registeredInfo.lastName;
            $ctrl.email = registeredInfo.emailadd;
            $ctrl.phoneNumber = registeredInfo.contactNo;

            // Favorite Menu
            $ctrl.menu_shortname = registeredInfo.menu_shortname;
            $ctrl.menu_name = registeredInfo.menu_name;
            $ctrl.menu_description = registeredInfo.menu_description;
            $ctrl.menu_price_large = registeredInfo.menu_price_large;
            $ctrl.menu_price_small = registeredInfo.menu_price_small;
            $ctrl.menu_category_short_name = registeredInfo.menu_category_short_name;
        }
        else{
            $ctrl.notSignedUp = "Not Signed Up Yet. Sign up Now!";
        }
}

})();
