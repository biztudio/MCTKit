/*jshint esversion: 6 */
import alphabetkit from '../src/components/common/alphabet';

describe('Test Alphabet Kit', ()=>{
    test('Test the source string', ()=>{
        let srcstc = alphabetkit.source;
        expect(srcstc).toBe('abcdefghijklmnopqrstuvwxyz')
    });
   
    test('Test Alphabet lower array as expected', () => {
        let letter_list = alphabetkit.get_letter_list();
        console.log(letter_list);
        expect(letter_list.join('')).toBe(alphabetkit.source);
    });

    test('Test Alphabet upper array as expected', () => {
        let letter_list = alphabetkit.get_letter_list(true);       
        expect(letter_list.join('')).toBe(alphabetkit.source.toUpperCase());
    });

    test('Test Alphabet random lower array as expected', () => {
        let source_list =  (alphabetkit.get_letter_list());
        let randowm_list = (alphabetkit.get_letter_list_random());
        expect(new Set(source_list).length).toBe(new Set(randowm_list).length);
    });

    test('Test Alphabet random upper array as expected', () => {
        let source_list =  (alphabetkit.get_letter_list(true));
        let randowm_list = (alphabetkit.get_letter_list_random(true));
        expect(new Set(source_list).length).toBe(new Set(randowm_list).length);
    });

});