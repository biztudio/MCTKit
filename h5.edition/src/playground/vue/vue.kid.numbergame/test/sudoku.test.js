import sudokukit from '../src/components/common/sudokukit'

describe('Test Sudoku Kit', ()=>{
    test('Test the Sudoku at level 1', ()=>{
        let sudoku = sudokukit.getSudokuSourceData(1);
        expect(sudoku.length).toBe(9)
    });
   
    test('Test the Sudoku Structure at level 3', ()=>{
        let sudoku = sudokukit.getSudokuSourceData(3);
        expect(sudoku.length).toBe(81)
    });
});