angular.module('myApp').controller('SideMenuCtrl',["$scope",function($scope){
	var vm = $scope,
	menulist = vm.menulist = [
		{code:1,name:"我的信用卡",icon:"glyphicon glyphicon-folder-open" ,state:"MyCard",
		children:[{code:1-1,name:"信用卡",icon:"glyphicon glyphicon-folder-open" ,state:"cardList"},
		{code:1-2,name:"信用卡详情",icon:"glyphicon glyphicon-folder-open" ,state:"cardInfo"}]},
		{code:2,name:"我的事务",icon:"glyphicon glyphicon-folder-open" ,state:"MyThing"},
		{code:3,name:"消费清单",icon:"glyphicon glyphicon-folder-open" ,state:"MyFee"}
	],
	isSelectMenu = false;
	
	
	// ========function  begin==========
	
	vm.selectMenu = function (menu) {
		if (menu.children){
			vm.isSelectMenu = !vm.isSelectMenu;
		}
	}
}]);