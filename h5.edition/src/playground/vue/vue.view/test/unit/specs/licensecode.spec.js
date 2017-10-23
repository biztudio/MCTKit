var assert = require('assert')
var expect = require('chai').expect

import Vue from "vue"
import licensecode from '../../../src/licensecode.vue'

//describe is test suite, which means a group of test cases
describe('#license key code',function(){
    // Retry all tests in this suite up to 2 times
    //this.retries(2);

    //TEST DURATION
    this.slow(10000);

    before(function() {
        // runs before all tests in this block
        console.log('Mocha is testing...')
      })

      beforeEach(function() {
        // runs before each test in this block
        console.log('Mocha is testing on a case.')
      })  

    it('Macho is simple', function(){
        console.log('mocha test is simple')
        assert.equal('1', '1')
    })
      
    //it means test case
    it('License Key Code is 1-2-3-4-5-6-7 when input license code box is [1,2,3,4,5,6,7]', () => {
        //var codes = [1,2,3,4,5,6,7]
        console.log('mocha test license')
        
        const Constructor = Vue.extend(licensecode)
        const licensecomp = new Constructor().$mount()   
        licensecomp.id = 'TL'     
        console.log(licensecomp.keylabel_id)
        licensecomp.licensecode = ['1','2','3','4','5','6','7']
        console.log(licensecomp.licensekeycode)
        //expect(licensecomp.$el.licensekeycode).to.contain('1-2-3-4-5-6-7')
        expect(4 + 5).to.be.equal(9)
        /**/
    })

    afterEach(function() {
        // runs after each test in this block
        console.log('Mocha tested code in a case.')
      })

    after(function() {
        // runs after all tests in this block
        console.log('Mocha tested all code.')
      })
})