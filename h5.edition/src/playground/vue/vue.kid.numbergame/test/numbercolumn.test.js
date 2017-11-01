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
        component_numbercolumn.group = 3;
        component_numbercolumn.height = 10;
        component_numbercolumn.witdh = 2;
        component_numbercolumn.draw_columns();
        expect(component_numbercolumn._number_columns.length).toBe(component_numbercolumn.group);
        expect(component_numbercolumn._number_columns[0].length).toBe(component_numbercolumn.height);
        expect(component_numbercolumn._number_columns[0][0].length).toBe(component_numbercolumn.witdh);
        for(let index = 0; index < component_numbercolumn.witdh; index++){
            expect(component_numbercolumn._number_columns[0][0][index]).toBeLessThanOrEqual(9);
        }
        console.log(component_numbercolumn._number_columns)
    });
});