'use strict';

app.controller('indexCtrl', ['$scope', '$rootScope','indexService',
    function ($scope, $rootScope,indexService) {
        $scope.semne=[];
        $scope.cuvinte_cheie=[];
        $scope.variabile=[];
        
        Array.prototype.clean = function(deleteValue) {
          for (var i = 0; i < this.length; i++) {
            if (this[i] == deleteValue) {         
              this.splice(i, 1);
              i--;
            }
          }
          return this;
        };
        
        $scope.analyze=function(code){
            var semne=["==", "=", "+", "-", "*", "/", "%", "++", "--", "!=", "not_eq", "<", "<=", ">", ">=", "!", "not", "&&", "and", "||", "or", "~", "&", "|", "^", "xor", "<<", ">>", "+=", "-=", "*=", "/=", "%=", "&=", "|=", "^=", "<<=", ">>=", "->", "}", "{", ")", "(", "[", "]"," ",",",";",""];
            var cuvinte_cheie=["abstract", "array", "auto", "bool", "break", "case", "catch", "char", "class", "const", "const_cast", "continue", "decltype", "default", "delegate", "delete", "deprecated 1", "dllexport", "do", "double", "dynamic_cast", "else", "enum", "enum class", "enum struct", "event", "explicit", "extern", "false", "finally", "float", "for", "for each, in", "friend", "friend_as", "gcnew", "generic", "goto", "if", "initonly", "inline", "int", "interface class", "interface struct", "interior_ptr", "literal", "long", "mutable", "naked 1", "namespace", "new", "new", "noinline 1", "noreturn 1", "nothrow 1", "novtable 1", "nullptr", "operator", "private", "property", "property 1", "protected", "public", "ref class", "ref struct", "register", "reinterpret_cast", "return", "safecast", "sealed", "selectany 1", "short", "signed", "sizeof", "static", "static_assert", "static_cast", "struct", "switch", "template", "this", "thread 1", "throw", "true", "try", "typedef", "typeid", "typeid", "typename", "union", "unsigned", "using declaration, using directive", "uuid 1", "value class", "value struct", "virtual", "void", "volatile", "while","cin","cout"];
            
            var vector_ajutator=[];
            var only_math=code.replace(/([a-zA-Z ]|[0-9]|([\[\(][^\[\(\]\)]+))|\s/g, " ").split(" ").clean('')
            for(var i=0;i<only_math.length;i++){
                only_math[i]=only_math[i].replace(';','');
            }
            console.log(only_math);
            var array = code.replace(/\r\n|\n/g, '').split("");
            var aux='';
            array.clean("");
            for(var i=0;i<array.length;i++){
                
                if(semne.indexOf(array[i]) > -1){
                    if(array[i]!=" "){
                            $scope.semne.push({val:array[i]});
                        }
                        vector_ajutator.push(aux);
                        aux='';
                }else{
                    aux=aux.concat(array[i]);
                }
            }
            vector_ajutator.clean('');
            for(var i=0;i<vector_ajutator.length;i++){
                vector_ajutator[i]=vector_ajutator[i].replace(/\s/g, '');
            }
            console.log(vector_ajutator);
            for(var i=0;i<vector_ajutator.length;i++){
                var vizitat=0;
                for(var j=0;j<cuvinte_cheie.length;j++){
                    if(vector_ajutator[i]==cuvinte_cheie[j]){
                        $scope.cuvinte_cheie.push({val:vector_ajutator[i]});
                    }
                    else
                    {
                        if(vizitat==0){
                            if(parseInt(vector_ajutator[i])){
                                $scope.variabile.push({val:vector_ajutator[i],tip:'numar'});
                            }else{
                                $scope.variabile.push({val:vector_ajutator[i],tip:'string'});
                            }
                        }
                        vizitat=1;
                    }
                }
               
            }
            
            for(var i=0;i<$scope.variabile.length;i++){
                    for(var j=0;j<$scope.cuvinte_cheie.length;j++){
                        if($scope.cuvinte_cheie[j].val==$scope.variabile[i].val){
                            $scope.variabile.splice(i,1);
                        }
                    }
            }
        console.log($scope.variabile);
        }
       
    }]);