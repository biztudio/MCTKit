/*jshint esversion: 6 */
import mathkit from './mathkit'

export default{   
    checkSudoku:function(sudoku){

    },

    generateSeedArray:function(grid_seed){
        let grid = []
        let temp_pool = grid_seed.slice(0)
        for(let index in grid_seed){
            let index = mathkit.get_random_number_index(temp_pool.length);
            let number = temp_pool[index];
            grid.push(number)
            temp_pool.splice(index, 1)
        }        
        return grid
    },

    getLineIndex:function(index){
        return Math.floor(index / 9);
    },

    getColumnIndex:function(index){
        return index % 9
    },

    getStartIndexInLine:function(index){
        let line_index = this.getLineIndex(index)
        return line_index * 9
    },

    getIndexListInColum:function(index){
        let column_start_index = this.getColumnIndex(index)
        let indes = []
        for(let i = 0; i < 9; i++){
            indes.push(column_start_index + i * 9)
        }
        return indes
    },

    getInitializedSudoku9:function(){
        let sudoku = []       
        for(let index = 0; index < 81; index++){ sudoku.push(0) }
        return sudoku
    },

    getStartIndesInGrids:function(sudoku){
        if(!sudoku){
           sudoku = this.getInitializedSudoku9()
        }
        let grid_init_indes = []
        for(let sudokuindex in sudoku){
            let line_index = Math.floor(sudokuindex / 9)
            let cell_index_in_line = sudokuindex % 9
            let grid_column_index = Math.floor(cell_index_in_line/3);
            let grid_line_index = Math.floor(line_index/3);
            let init_grid_index = 9 * (grid_line_index  * 3) + (grid_column_index) * 3;
            if(!grid_init_indes.includes(init_grid_index))
                grid_init_indes.push(init_grid_index)
        }
        return grid_init_indes
    },

    getIndexListInGrid:function(index, grid_init_indes){
        if(!grid_init_indes){
            grid_init_indes = this.getStartIndesInGrids()
        }
        let line_index = this.getLineIndex(index)
        let colum_index = this.getColumnIndex(index)       
        let grid_indes = []
        console.log(line_index)
        console.log(colum_index)
        for(let grid_init_index of grid_init_indes){
            let grid_start_col_index = this.getColumnIndex(grid_init_index)
            let grid_start_line_index = this.getLineIndex(grid_init_index)
            let column_offset = colum_index - grid_start_col_index
            let line_offset = line_index - grid_start_line_index
            //console.log('gride init index: ' + grid_init_index + ', grid start line index:' + grid_start_line_index + ', grid start col index: ' + grid_start_col_index)
            if(column_offset >= 0 && column_offset <=2 && 
                line_offset >= 0 && line_offset <=2){
                    for(let gi = 0; gi < 3; gi++){
                        grid_indes.push((grid_init_index + gi)*1)
                        grid_indes.push((grid_init_index + gi + 9)*1)
                        grid_indes.push((grid_init_index + gi + 18)*1)
                    }
                    break;
                }
        }
        let sorted_result = grid_indes.sort(function (m, n) {
                                             if (m < n) return -1
                                             else if (m > n) return 1
                                             else return 0
        })
        console.log(sorted_result)   
        return sorted_result
    },

    getNumber:function(index, sudoku, seed, grid_init_indes){
        if(!seed){ seed = [1,2,3,4,5,6,7,8,9] }
        let line_start_index =  this.getStartIndexInLine(index)
        let column_indes = this.getIndexListInColum(index)
        console.log(column_indes)
        let existed_digits = []
        for(let i = 0; i < 9; i++){
            //digit in line
            let existed_digit = sudoku[line_start_index + i] * 1
            if(existed_digit > 0){
                existed_digits.push(existed_digit)
            }
            //digit in column
            existed_digit = sudoku[column_indes[i]]
            if(existed_digit > 0){
                existed_digits.push(existed_digit)
            }
        }
        let grid_indes = this.getIndexListInGrid(index, grid_init_indes)
        for(let gi of grid_indes){
            let existed_digit = sudoku[gi] * 1
            if(existed_digit > 0){
                existed_digits.push(existed_digit)
            }
        }

        for(let number of seed.filter(s => !existed_digits.includes(s))){
            return number
        }
    },

    getSudokuSourceData:function(){
        let x_grid_count = 3
        let y_grid_count = 3
        let x_cell_count_per_grid = 3
        let y_cell_count_per_grid = 3
        let grid_seed = [1,2,3,4,5,6,7,8,9]
        let grid_0_0 = this.generateSeedArray(grid_seed)//init grid
        let grid_1_1 = this.generateSeedArray(grid_seed)
        let grid_2_2 = this.generateSeedArray(grid_seed)        
        let sudoku = []
        let max_count_per_line = x_grid_count * x_cell_count_per_grid
        let max_count_per_column = y_grid_count * y_cell_count_per_grid
        let max_lenght = max_count_per_column * max_count_per_line
        for(let index = 0; index < max_lenght; index++){ sudoku.push(0) }
        /*
        for(let gi = 0; gi < 3; gi++){
            let gi_1_sudoku = gi
            let gi_2_sudoku = gi + max_count_per_line * y_cell_count_per_grid + x_cell_count_per_grid
            let gi_3_sudoku = gi + max_count_per_line * y_cell_count_per_grid * 2 + x_cell_count_per_grid * 2

            sudoku[gi_1_sudoku] = grid_0_0[gi]
            sudoku[gi_1_sudoku + 9] = grid_0_0[gi + 3]
            sudoku[gi_1_sudoku + 18] = grid_0_0[gi + 6]

            sudoku[gi_2_sudoku] = grid_1_1[gi]
            sudoku[gi_2_sudoku + 9] = grid_1_1[gi + 3]
            sudoku[gi_2_sudoku + 18] = grid_1_1[gi + 6]

            sudoku[gi_3_sudoku] = grid_2_2[gi]
            sudoku[gi_3_sudoku + 9] = grid_2_2[gi + 3]
            sudoku[gi_3_sudoku + 18] = grid_2_2[gi + 6]
        }
        */ 
        
        let grid_init_indes = []
        for(let sudokuindex in sudoku){
            let line_index = Math.floor(sudokuindex / 9)
            let cell_index_in_line = sudokuindex % 9
            let grid_column_index = Math.floor(cell_index_in_line/3);
            let grid_line_index = Math.floor(line_index/3);
            let init_grid_index = 9 * (grid_line_index  * 3) + (grid_column_index) * 3;
            if(!grid_init_indes.includes(init_grid_index))
                grid_init_indes.push(init_grid_index)
        }

        let grid_template = this.generateSeedArray(grid_seed) 
        for(let sudokuindex in sudoku){
            if(sudoku[sudokuindex] == 0){
                let number = this.getNumber(sudokuindex, sudoku, grid_template, grid_init_indes)
                sudoku[sudokuindex] = number
            }
        }
/*
        for(let grid_index in grid_init_indes){
            //0 4 8 grid is ready
            if(grid_index == 0 || grid_index == 4 || grid_index == 8) continue

            let grid_start_index = grid_init_indes[grid_index]
            for(let gi = grid_start_index; gi < grid_start_index + 3; gi++)
            {
                let existed_digits = []

                   
                    let line_index = Math.floor(gi/9)
                    sudoku[gi] = number
                    sudoku[gi + 9] = number
                    sudoku[gi + 18] = number
                   
            }                
        }
*/
            /*
            for(let sudokuindex in sudoku){
                if(sudoku[sudokuindex] == 0){

                    let line_index = Math.floor(sudokuindex / 9)
                    let index_in_line = sudokuindex % 9
                    let existed_digits = []
                    for(let i = line_index * 9; i < (line_index + 1) * 9; i++){//current line ref
                        let ref_number = sudoku[i]
                        if(ref_number > 0){
                            existed_digits.push(ref_number)
                        }
                    }
                    
                }
            }
            */

            
        return sudoku;
    }
}