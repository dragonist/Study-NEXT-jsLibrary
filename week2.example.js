var myFunction = function() {
    
};

function myFunction(){
    
}


function func(){
    word();
    var word = function() {
        console("hello");
    };
}
function func(){    
    var word;
    word();
    word = function() {
        console("hello");
    };
}
function func(){
    word();
    function word(){
        console.log("hello");
    }
}
function func(){
    function word(){
        console.log("hello");
    }
    word();
}

var word = "hello";
function func(){
    var word;
    console.log(word);
    word = "world";
    console.log(word);
}


var obj = {
    a : "hello"
}
var obj = new Object();
obj.a = "he