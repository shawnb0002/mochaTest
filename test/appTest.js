const assert = require('chai').assert;
// const sayHello = require('../app').sayHello;
// const addNumbers = require('../app').addNumbers;
const app = require('../app');

sayHelloResult = app.sayHello();
addNumbersResult = app.addNumbers(5, 5);


describe('App', function(){

    describe('sayHello()', () =>{
        it('sayHello should return hello', function(){
            // let result = app.sayHello();
            assert.equal(sayHelloResult, 'hello');
        })
    
        it('sayHello should should return type string', () =>{
            // let result = app.sayHello();
            assert.typeOf(sayHelloResult, 'string')
        })
    })


    describe('addNumbers()', () =>{
        it('addNumbers should be above 5', () =>{
            // result = app.addNumbers( 5, 5);
            assert.isAbove(addNumbersResult, 5);
        })

        it('addNumbers should should return type number', () =>{
            // let result = app.addNumbers( 5, 5);
            assert.typeOf(addNumbersResult, 'number')
        })
    })


});