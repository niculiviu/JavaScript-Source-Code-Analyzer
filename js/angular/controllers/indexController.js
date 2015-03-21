'use strict';

app.controller('indexCtrl', ['$scope', '$rootScope','indexService',
    function ($scope, $rootScope,indexService) {
        $scope.semne=["==", "=", "+", "-", "*", "/", "%", "++", "--", "!=", "not_eq", "<", "<=", ">", ">=", "!", "not", "&&", "and", "||", "or", "~", "&", "|", "^", "xor", "<<", ">>", "+=", "-=", "*=", "/=", "%=", "&=", "|=", "^=", "<<=", ">>=", "->", "}", "{", ")", "(", "[", "]"];
        $scope.cuvinte_cheie=["abstract", "array", "auto", "bool", "break", "case", "catch", "char", "class", "const", "const_cast", "continue", "decltype", "default", "delegate", "delete", "deprecated 1", "dllexport", "do", "double", "dynamic_cast", "else", "enum", "enum class", "enum struct", "event", "explicit", "extern", "false", "finally", "float", "for", "for each, in", "friend", "friend_as", "gcnew", "generic", "goto", "if", "initonly", "inline", "int", "interface class", "interface struct", "interior_ptr", "literal", "long", "mutable", "naked 1", "namespace", "new", "new", "noinline 1", "noreturn 1", "nothrow 1", "novtable 1", "nullptr", "operator", "private", "property", "property 1", "protected", "public", "ref class", "ref struct", "register", "reinterpret_cast", "return", "safecast", "sealed", "selectany 1", "short", "signed", "sizeof", "static", "static_assert", "static_cast", "struct", "switch", "template", "this", "thread 1", "throw", "true", "try", "typedef", "typeid", "typeid", "typename", "union", "unsigned", "using declaration, using directive", "uuid 1", "value class", "value struct", "virtual", "void", "volatile", "while"];
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