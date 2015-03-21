'use strict';

app.controller('indexCtrl', ['$scope', '$rootScope','indexService',
    function ($scope, $rootScope,indexService) {
        $scope.semne=[];
        $scope.cuvinte_cheie=[];
        $scope.variabile=[];
        $scope.analyze=function(code){
            var cuvinte_cheie=["","",""];
            var semne_de_punctuatie=["","",""];
            var array = code.split("");
            console.log(array);
            
            for(var i=0;i<array.length;i++){
                if(array[i] in semne_de_punctuatie){
                        $scope.
                }
            }

        }
       
    }]);