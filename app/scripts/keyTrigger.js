;(function (keyUtility, undefined ) {
 
    // private properties
    var keyCombination = [{
        '67|90': 1, //* Handle for Ctrl-Z *//
        '67|86': 2 //* Handle for Ctrl-V *//
    }];

    var availableListeners = [{
        'click' : true,
        'change': false,
        'touch' : true
    }];

    // private methods 
    function trace(a){
        if(this.console&&typeof console.log!="undefined"){
            console.log(a);
        }
    }    

    function checkEntry(value) {
        //do check of values here BUT for now test true for Mocha tests

        var split = value.split('|');

        split.forEach(function(e) {
            trace(e);
        });


        return true;
    }
    // public methods and properties
    keyUtility.prop = "passed";
    //@keyCombination - pass array of codes or single key item
    //@callBack - pass array of codes or single key item
    keyUtility.trigger = function(listener, callBack) {
        
        var validEntry = false;

        document.onkeypress = function(e) {
            e = e || window.event;
            var charCode = (typeof e.which == "number") ? e.which : e.keyCode, length = 1;
            var keysPressed = [];

            var t = setInterval(function(){
                trace(keysPressed.indexOf(charCode));
                if(!keysPressed.indexOf(charCode) > 0) {
                    if(keysPressed.length==2) {
                    trace(keysPressed);
                      clearInterval(t);
                    }
                }
                keysPressed.push(charCode); 
            }, 200);            

            if (charCode) {
                trace("Character typed: " + String.fromCharCode(charCode));
            }
        };

        // if(typeof keyCode === array && checkEntry(keyCode)) {
            
        //     validEntry = true;

        //     //do trigger and event manipulation
        //     if(typeof callback === "function") {
        //         callback.apply(this, [dataSet]);
        //     }

        // }
    }
    //@keyCode - pass array of codes or single key item
    keyUtility.validCombination = function(keyCode) {

        if(typeof keyCode === array) {



        }
    }
    // private method


 
    // check to evaluate whether "keyUtility" exists in the
    // global keyUtility - if not, assign window.keyUtility an
    // object literal
 
})( window.keyUtility = window.keyUtility || {} );

keyUtility.trigger();





