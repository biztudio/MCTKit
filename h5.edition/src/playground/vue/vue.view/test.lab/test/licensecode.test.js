import { shallow } from 'vue-test-utils' 
import licensecodeApp from '../../src/licensecode'

describe('licensecode.jest.js: Test Suite for license code', () => {
    let component_license

    beforeEach(() => {
      // Create a instance of the component
      component_license = shallow(licensecodeApp).vm
    })
  
    test("Test Case 1: License Key Code is 1a-2B-3c-4D-5e-6F-7g when input license code box is ['1a','2B','3c','4D','5e','6F','7g']", ()=>{
      const simCodes = ['1a','2B','3c','4D','5e','6F','7g']
      const expected_keycodestring = '1a-2B-3c-4D-5e-6F-7g'
      let boxcount = 7
      component_license.draw_keycode_box(boxcount)  
      for(let index = 0; index < boxcount; index++){
        component_license.license_code[index].value = simCodes[index]
      }
      expect(component_license.licensekeycode).toEqual(expected_keycodestring)
    })

    test("Test Case 2: License Key Code Array is 3 length code object When Set Length is 3", ()=>{
      const expected_codes = [{'id':"keycode0", value:''}, {'id':"keycode1", value:''}, {'id':"keycode2", value:''}]
      let boxcount = 3
      component_license.draw_keycode_box(boxcount)       
      for(let index = 0; index < component_license.license_code.length; index++){
          expect(component_license.license_code[index].id).toEqual(expected_codes[index].id)
      }
    })

    afterEach(() => {
    })    
  })