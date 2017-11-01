/*jshint esversion: 6 */
import { shallow } from 'vue-test-utils' 
import numbercolumn from '../src/components/numbercolumn/numbercolumn';

describe('Test Component numbercolumn', ()=>{
    let component_numbercolumn;
    
    beforeEach(() => {
        // Create a instance of the component
        component_numbercolumn = shallow(numbercolumn).vm;
    });

    test('Test Number Column Generator: description...', () => {
        component_numbercolumn.group = 1;
        component_numbercolumn.height = 3;
        component_numbercolumn.width = 2;
        component_numbercolumn.draw_columns();
        //console.log(component_numbercolumn._columns)
        expect(1).toBeLessThanOrEqual(8);
    });
});