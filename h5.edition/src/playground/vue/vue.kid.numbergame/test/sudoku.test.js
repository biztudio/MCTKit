import sudokukit from '../src/components/common/sudokukit'

describe('Test Sudoku Kit', ()=>{
    test('Test the Sudoku get Line Index', ()=>{
        let lineIndex = sudokukit.getLineIndex(1);
        expect(lineIndex).toBe(0)

        lineIndex = sudokukit.getLineIndex(9);
        expect(lineIndex).toBe(1)

        lineIndex = sudokukit.getLineIndex(47);
        expect(lineIndex).toBe(5)

        lineIndex = sudokukit.getLineIndex(75);
        expect(lineIndex).toBe(8)

        lineIndex = sudokukit.getLineIndex(32);
        expect(lineIndex).toBe(3)

    });

    test('Test the Sudoku getIndexListInGrid ', () => {
         let indes = sudokukit.getIndexListInGrid(0)
         expect(indes[0]).toBe(0)
         expect(indes[1]).toBe(1)
         expect(indes[2]).toBe(2)
         expect(indes[3]).toBe(9)
         expect(indes[4]).toBe(10)
         expect(indes[5]).toBe(11)
         expect(indes[6]).toBe(18)
         expect(indes[7]).toBe(19)
         expect(indes[8]).toBe(20)
        
        indes = sudokukit.getIndexListInGrid(32)
         expect(indes[0]).toBe(30)
         expect(indes[1]).toBe(31)
         expect(indes[2]).toBe(32)
         expect(indes[3]).toBe(39)
         expect(indes[4]).toBe(40)
         expect(indes[5]).toBe(41)
         expect(indes[6]).toBe(48)
         expect(indes[7]).toBe(49)
         expect(indes[8]).toBe(50)

         indes = sudokukit.getIndexListInGrid(70)
         expect(indes[0]).toBe(60)
         expect(indes[1]).toBe(61)
         expect(indes[2]).toBe(62)
         expect(indes[3]).toBe(69)
         expect(indes[4]).toBe(70)
         expect(indes[5]).toBe(71)
         expect(indes[6]).toBe(78)
         expect(indes[7]).toBe(79)
         expect(indes[8]).toBe(80) 
    });

    test('Test the Sudoku get getIndexListInColum', () =>{
        let indes = sudokukit.getIndexListInColum(2)
        expect(indes[0]).toBe(2)
        expect(indes[1]).toBe(11)
        expect(indes[2]).toBe(20)
        expect(indes[3]).toBe(29)
        expect(indes[4]).toBe(38)
        expect(indes[5]).toBe(47)
        expect(indes[6]).toBe(56)
        expect(indes[7]).toBe(65)
        expect(indes[8]).toBe(74)
    });

    test('Test the Sudoku get Start Index InLine', ()=>{
        let lineIndex = sudokukit.getStartIndexInLine(1);
        expect(lineIndex).toBe(0)

        lineIndex = sudokukit.getStartIndexInLine(9);
        expect(lineIndex).toBe(9)

        lineIndex = sudokukit.getStartIndexInLine(47);
        expect(lineIndex).toBe(45)

        lineIndex = sudokukit.getStartIndexInLine(75);
        expect(lineIndex).toBe(72)

        lineIndex = sudokukit.getStartIndexInLine(66);
        expect(lineIndex).toBe(63)

        lineIndex = sudokukit.getStartIndexInLine(59);
        expect(lineIndex).toBe(54)

        lineIndex = sudokukit.getStartIndexInLine(32);
        expect(lineIndex).toBe(27)

    });

    test('Test the Sudoku get Column Index', ()=>{
        let columnIndex = sudokukit.getColumnIndex(1);
        expect(columnIndex).toBe(1)

        columnIndex = sudokukit.getColumnIndex(9);
        expect(columnIndex).toBe(0)

        columnIndex = sudokukit.getColumnIndex(47);
        expect(columnIndex).toBe(2)

        columnIndex = sudokukit.getColumnIndex(75);
        expect(columnIndex).toBe(3)

        columnIndex = sudokukit.getColumnIndex(66);
        expect(columnIndex).toBe(3)

        columnIndex = sudokukit.getColumnIndex(59);
        expect(columnIndex).toBe(5)

        columnIndex = sudokukit.getColumnIndex(32);
        expect(columnIndex).toBe(5)
    });
   
});