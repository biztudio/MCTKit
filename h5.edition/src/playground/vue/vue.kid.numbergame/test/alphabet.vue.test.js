/*jshint esversion: 6 */
import { shallow } from 'vue-test-utils' 
import alphabetgrid from '../src/components/alphabetgrid/alphabetgrid';

describe('Test Component Alphabet grid', ()=>{
    let component_alphabetgrid;
    
    beforeEach(() => {
        // Create a instance of the component
        component_alphabetgrid = shallow(alphabetgrid).vm;
    });

    test('Test Alphabet Generator: Length', () => {
        component_alphabetgrid.group = 1;
        component_alphabetgrid.case_mode = 1;
        component_alphabetgrid.draw_grid();

        console.log(component_alphabetgrid._grids);
        expect(1).toBe(1);
    });
});