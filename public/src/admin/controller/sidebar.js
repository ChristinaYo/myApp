angular.module("myApp").controller("SideBarCtrl", ["$scope", "$rootScope", function($scope, $rootScope) {
    var vm = $scope;
    vm.username = "";
    /*UserService.getUserinfo().then(function(data){
        if(data.success == 1){
            vm.username = data.result.userVO.userName;
        }
    });*/
}]);