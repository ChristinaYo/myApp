angular.module('myApp').controller('MyCardListCtrl',["$scope","$state",'myCardService',function($scope,$state,myCardService){
	var vm = $scope;
    //查询个人信用卡数据
    vm.queryCardlist = function () {
        myCardService.queryCardlist().then(function (result) {
            //vm.cardlist = result.cardlist;
            vm.cardTitle = result.cardTitle;
        });
    }
      
   function init(){
       vm.queryCardlist();
   }
    init();
}]);