'use strict';

app.controller('indexCtrl', ['$scope', '$rootScope','indexService',
    function ($scope, $rootScope,indexService) {
        
        $scope.analyze=function(code){
            console.log(code.split(" "));
            console.log(code.split(""));
            console.log(code.replace(/\s/g, ""));
        }
       
    }]);