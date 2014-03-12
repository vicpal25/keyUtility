/*global describe, it */
'use strict';
(function () {
    describe('Give it some context', function () {
        describe('maybe a bit more context here', function () {
            it('should run here few assertions', function () {

            });
        });
    });
})();

(function () {
    describe('Array', function () {
        describe('#indexOf()', function () {
            it('should return -1 when the value is not present', function () {
            	chai.assert.ok(-1, [1,2,3].indexOf(5));
            	//chai.assert('foo' !== 'bar', 'foo is not bar');
            });
        });
    });
})();

(function () {
    describe('Utility Cnostructor', function () {
        describe('It should construct without any issues', function () {
            it('it should be defined and not constructed as a function', function () {            	
            	chai.assert.isDefined(keyUtility, "it is defined");
            	//chai.assert('foo' !== 'bar', 'foo is not bar');
            });
        });
    });
})();

(function () {
    describe('Utility Constructor with properties', function () {
        describe('It should construct without any issues and pass properties back to [Object]', function () {
            it('properties should not break this object', function () {            	
            	chai.assert.isDefined(keyUtility, "it is defined");
            	//chai.assert('foo' !== 'bar', 'foo is not bar');
            });
        });
    });
})();


// var assert = require("assert")

// describe('Array', function(){
//   describe('#indexOf()', function(){
//     it('should return -1 when the value is not present', function(){
//       assert.equal(0, [1,2,3].indexOf(5));
//       assert.equal(-1, [1,2,3].indexOf(0));
//     })
//   })
// });
// })();


// describe('User', function(){
//   describe('#save()', function(){
//     it('should save without error', function(done){
//       var user = new User('Luna');
//       user.save(function(err){
//         if (err) throw err;
//         done();
//       });
//     })
//   })
// })
