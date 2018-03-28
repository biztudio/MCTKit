/*jshint esversion: 6 */
import { mathkit, alphabetkit } from 'randomlibiz';

describe('Test Math Kit', () =>{
    test('Test Random Index', () => {
        let index = mathkit.get_random_number_index();
        expect(index).toBeLessThanOrEqual(8);
    });

  
});

describe('Test Alphabet Kit', () => {
    test('Test Alphabet Arrary Init', () => {
        let to_upper_case = true;
        let letter_array = alphabetkit.get_letter_list(to_upper_case);
        console.log(letter_array.join(','));
        expect(letter_array.length).toBe(26);
    });


});