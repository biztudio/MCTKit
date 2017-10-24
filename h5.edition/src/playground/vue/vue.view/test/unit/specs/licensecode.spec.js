import assert from 'assert'
import {expect, should} from "chai"
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
        //console.log('Mocha is testing...')
      })

      beforeEach(function() {
        // runs before each test in this block
        //console.log('Mocha is testing on a case.')
      })  

    it('Macho is simple', function(){
        assert.equal('1', '1')
    })
         
    //it means test case
    it("License Key Code is 1a-2B-3c-4D-5e-6F-7g when input license code box is ['1a','2B','3c','4D','5e','6F','7g']", () => {
        //console.log('mocha test license')
        
        const simCodes = ['1a','2B','3c','4D','5e','6F','7g']
        const expected_keycodestring = '1a-2B-3c-4D-5e-6F-7g'
        const vm = new Vue(licensecode).$mount()
        let boxcount = 7
        vm.draw_keycode_box(boxcount)
        for(let index = 0; index < boxcount; index++){
            vm.license_code[index].value = simCodes[index]
        }
        //console.log(vm.license_code)
        //console.log(vm.licensekeycode)
        expect(vm.licensekeycode).to.be.equal(expected_keycodestring)
    })

    it("License Key Code Array is 3 length code object When Set Length is 3", () => {
        //console.log('mocha test license')
        
        const vm = new Vue(licensecode).$mount()
        const expected_codes = [{'id':"keycode0", value:''}, {'id':"keycode1", value:''}, {'id':"keycode2", value:''}]
        let boxcount = 3
        vm.draw_keycode_box(boxcount)       
        for(let index = 0; index < vm.license_code.length; index++){
            expect(vm.license_code[index].id).to.be.equal(expected_codes[index].id)
        }
    })

    afterEach(function() {
        // runs after each test in this block
        //console.log('Mocha tested code in a case.')
      })

    after(function() {
        // runs after all tests in this block
        //console.log('Mocha tested all code.')
      })
})