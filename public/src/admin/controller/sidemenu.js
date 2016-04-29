angular.module('myApp').controller('SideMenuCtrl',["$rootScope","$state",function($rootScope,$state){
	// var vm = $scope,
	// menulist = vm.menulist = [
	// 	{code:1,name:"我的信用卡",icon:"glyphicon glyphicon-folder-open" ,state:"MyCard",
	// 	children:[{code:1-1,name:"信用卡",icon:"glyphicon glyphicon-folder-open" ,state:"cardList"},
	// 	{code:1-2,name:"信用卡详情",icon:"glyphicon glyphicon-folder-open" ,state:"cardInfo"}]},
	// 	{code:2,name:"我的事务",icon:"glyphicon glyphicon-folder-open" ,state:"MyThing"},
	// 	{code:3,name:"消费清单",icon:"glyphicon glyphicon-folder-open" ,state:"MyFee"}
	// ],
	// isSelectMenu = false;
	
	
	// // ========function  begin==========
	
	// vm.selectMenu = function (menu) {
	// 	if (menu.children){
	// 		vm.isSelectMenu = !vm.isSelectMenu;
	// 	}
	// }
	var vm = this;

    this.menus = [];

    var menus = [

        {code: "0", name: "我的信用卡", icon: "iconfont icon-info", state: "MyCard"},
        {code: "1", name: "我的事务", icon: "iconfont icon-publishNew", state:""},
        {code: "2", name: "消费清单", icon: "iconfont icon-inSale",state:""},
        {code: "3", name: "待售商品", icon: "iconfont icon-forSale",state:""},
        {parent: "0", code: "0-1", name: "信用卡", icon: "fa fa-hdd-o", state: "MyCardList"},
        {parent: "0", code: "0-2", name: "信用卡详情", icon: "fa fa-anchor", state: ""},
    ];

    var menuMap = {};

    for (var i=0; i<menus.length; i++) {
        var menuItem = menus[i];
        menuMap[menuItem.code] = menuItem;

        if (!menuItem.parent) {
            this.menus.push(menuItem);
        }
        else {
            var parent = menuMap[menuItem.parent];
            if (!parent.children) {
                parent.children = [];
            }
            parent.children.push(menuItem);
            menuItem.parentMenu = parent;
        }
    }

    this.selectedMenu = null;

    this.selectMenu1 = function (menu) {
        if (menu != this.selectedMenu) {
            this.selectedMenu = menu;

            if (menu.state) {
                $state.go(menu.state);
            }
        }
        else {
            this.selectedMenu = menu.parentMenu;
        }
    };

    this.selectMenu2 = function (menu) {
        if (menu != this.selectedMenu) {
            this.selectedMenu = menu;

            if (menu.state) {
                $state.go(menu.state);
            }
        }
    };

    this.isMenuSelected = function(menuItem) {
        if (this.selectedMenu) {
            if (this.selectedMenu.code.indexOf(menuItem.code) == 0) {
                return true;
            }
        }
        else {
            return false;
        }
    };

    (function  init(){
        menus.forEach(function(it) {
            if (it.state == $state.current.name) {
                vm.selectedMenu = it;
                return false;
            }
        });
    })();

    $rootScope.$on("$stateChangeSuccess", function (event, toState, toParams, fromState, fromParams) {
        menus.forEach(function(it) {
            if (it.state == toState.name) {
                vm.selectedMenu = it;
                // console.log(it.state);
                return false;
            }
        });
    });
}]);