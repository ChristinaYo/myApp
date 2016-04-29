angular.module('myApp').factory("myCardService",["httpService","baseUrl",function (httpService,baseUrl) {
    return {
        "queryCardlist": function (params) {
            return httpService.get("/auth",params);
        }
    }
}])
    
