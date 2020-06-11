(function() {

  'use strict';

  angular.module('public')
  .controller('SignupController', SignupController);

SignupController.$inject = ['MenuService']
  function SignupController(MenuService) {

    var $ctrl = this;
    var arr = "";
    var savedItem = "";


      $ctrl.checkForMenuExists = function () {

        if($ctrl.menuNumber != undefined){
          MenuService.getMenuItem($ctrl.menuNumber).then(function(d){
              if(d.status){
              $ctrl.status = d.status;
              }
              else{
                arr = d;
                $ctrl.status="";
              }
          });

          }


      }

      $ctrl.submit = function(e){

                if($ctrl.status == "500" || $ctrl.status == undefined){
                    // do nothing
                }
                else{

                  // save service at common place and notify user
                  var registeredInfo = {
                    firstName:$ctrl.fn,
                    lastName:$ctrl.ln,
                    emailadd:$ctrl.emailId,
                    contactNo:$ctrl.phNumber,
                    menu_shortname:arr.short_name,
                    menu_name:arr.name,
                    menu_description:arr.description,
                    menu_price_large:arr.price_large,
                    menu_price_small:arr.price_small,
                    menu_category_short_name:arr.category_short_name
                  };

                    savedItem = MenuService.saveFavoriteMenu(registeredInfo);
                    if(savedItem > 0){
                        $ctrl.successMessage = "Your information has been saved";
                    }
                }
      }
  }

})();
