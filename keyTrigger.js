;(function ( keyUtility, undefined ) {
 
    // private properties
    var foo = "foo",
        bar = "bar";
 

    var combinations = [{
        'x' : true
    }];
    // public methods and properties
    keyUtility.foobar = "foobar";
    keyUtility.sayHello = function () {
        speak( "hello world" );
    };
    //@keyCode - pass array of codes or single key item
    keyUtility.validCombination = function(keyCode) {

        if(typeof keyCode === array) {

        }
    }
    // private method
    function speak(msg) {
        console.log( "You said: " + msg );
    };
 
    // check to evaluate whether "keyUtility" exists in the
    // global keyUtility - if not, assign window.keyUtility an
    // object literal
 
})( window.keyUtility = window.keyUtility || {} );


function trace(a){
    if(this.console&&typeof console.log!="undefined"){
        console.log(a);
    }
}


