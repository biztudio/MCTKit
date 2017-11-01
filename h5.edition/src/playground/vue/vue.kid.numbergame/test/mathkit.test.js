/*jshint esversion: 6 */
import mathkit from '../src/components/numbercolumn/mathkit';

describe('Test Math Kit', () =>{
    test('Test Random Index', () => {
        let index = mathkit.get_random_number_index();
        expect(index).toBeLessThanOrEqual(8);
    })
});