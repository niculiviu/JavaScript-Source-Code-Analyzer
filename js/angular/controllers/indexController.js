'use strict';

app.controller('indexCtrl', ['$scope', '$rootScope','indexService',
    function ($scope, $rootScope,indexService) {
       
        
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
            $scope.semne=[];
            $scope.cuvinte_cheie=[];
            $scope.variabile=[];
            
            
            var semne=["==", "=", "+", "-", "*", "/", "%", "++", "--", "!=", "not_eq", "<", "<=", ">", ">=", "!", "not", "&&", "and", "||", "or", "~", "&", "|", "^", "xor", "<<", ">>", "+=", "-=", "*=", "/=", "%=", "&=", "|=", "^=", "<<=", ">>=", "->", "}", "{", ")", "(", "[", "]"," ",",",";",""];
            var cuvinte_cheie=["abstract", "array", "auto", "bool", "break", "case", "catch", "char", "class", "const", "const_cast", "continue", "decltype", "default", "delegate", "delete", "deprecated 1", "dllexport", "do", "double", "dynamic_cast", "else", "enum", "enum class", "enum struct", "event", "explicit", "extern", "false", "finally", "float", "for", "for each, in", "friend", "friend_as", "gcnew", "generic", "goto", "if", "initonly", "inline", "int", "interface class", "interface struct", "interior_ptr", "literal", "long", "mutable", "naked 1", "namespace", "new", "new", "noinline 1", "noreturn 1", "nothrow 1", "novtable 1", "nullptr", "operator", "private", "property", "property 1", "protected", "public", "ref class", "ref struct", "register", "reinterpret_cast", "return", "safecast", "sealed", "selectany 1", "short", "signed", "sizeof", "static", "static_assert", "static_cast", "struct", "switch", "template", "this", "thread 1", "throw", "true", "try", "typedef", "typeid", "typeid", "typename", "union", "unsigned", "using declaration, using directive", "uuid 1", "value class", "value struct", "virtual", "void", "volatile", "while","cin","cout"];
            
            var vector_ajutator=[];
            var only_math=code.replace(/([a-zA-Z ]|[0-9])|\s/g, " ").split(" ").clean('')
            for(var i=0;i<only_math.length;i++){
                //only_math[i]=only_math[i].replace(';','');
                if(semne.indexOf(only_math[i]) > -1){
                    if(
                        only_math[i]==semne[1]||
                        only_math[i]==semne[2]||
                        only_math[i]==semne[3]||
                        only_math[i]==semne[4]||
                        only_math[i]==semne[5]||
                        only_math[i]==semne[6]||
                        only_math[i]==semne[7]||
                        only_math[i]==semne[8]){
                        $scope.semne.push({val:only_math[i],tip:'Operator matematic'});
                    }if(
                         only_math[i]==semne[9]||
                         only_math[i]==semne[10]||
                         only_math[i]==semne[11]||
                         only_math[i]==semne[12]||
                         only_math[i]==semne[13]||
                         only_math[i]==semne[14]||
                         only_math[i]==semne[15]||
                         only_math[i]==semne[16]||
                         only_math[i]==semne[17]||
                         only_math[i]==semne[18]||
                         only_math[i]==semne[19]||
                         only_math[i]==semne[20]||
                         only_math[i]==semne[21]||
                         only_math[i]==semne[22]||
                         only_math[i]==semne[23]||
                         only_math[i]==semne[24]||
                         only_math[i]==semne[25]||
                         only_math[i]==semne[26]||
                         only_math[i]==semne[27]||
                         only_math[i]==semne[28]||
                         only_math[i]==semne[29]){
                            $scope.semne.push({val:only_math[i],tip:'Operator logic'});
                    }
                    else{
                        $scope.semne.push({val:only_math[i],tip:'Separator'});
                    }
                    
                }
            }
            $scope.semne.clean('');
            console.log(only_math);
            var array = code.replace(/\r\n|\n/g, '').split("");
            var aux='';
            array.clean("");
            for(var i=0;i<array.length;i++){
                
                if(semne.indexOf(array[i]) > -1){
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
                            if(!isNaN(vector_ajutator[i])){
                                $scope.variabile.push({val:vector_ajutator[i],tip:'Constanta'});
                            }else{
                                if(vector_ajutator[i].length==1)
                                $scope.variabile.push({val:vector_ajutator[i],tip:'Variabila'});
                            }
                        }
                        vizitat=1;
                    }
                }
               
            }
            
            for(var i=0;i<$scope.variabile.length;i++){
                    for(var j=0;j<$scope.cuvinte_cheie.length;j++){
                        if($scope.cuvinte_cheie[j].val==$scope.variabile[i].val || $scope.variabile[i].val=='"' || $scope.variabile[i].val=="'"){
                            $scope.variabile.splice(i,1);
                        }
                    }
            }
        console.log($scope.variabile);
        }
       
    }]);