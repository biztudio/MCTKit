/*jshint esversion: 6 */
import mathkit from 'randomlibiz';

describe('Test Math Kit', () =>{
    test('Test Random Index', () => {
        let index = mathkit.get_random_number_index();
        expect(index).toBeLessThanOrEqual(8);
    });

    test('Test Random Index, parameter is 0 the index should be less or equal to 1.', () => {
        let index = mathkit.get_random_number_index(0);
        expect(index).toBeLessThanOrEqual(1);
    })
});