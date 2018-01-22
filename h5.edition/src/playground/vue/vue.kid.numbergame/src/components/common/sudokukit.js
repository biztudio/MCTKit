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
        for(let number of grid_template){

            for(let grid_index in grid_init_indes){
                //0 4 8 grid is ready
                if(grid_index == 0 || grid_index == 4 || grid_index == 8) continue

                if(grid_index != 1) continue
                let grid_start_index = grid_init_indes[grid_index]
                for(let gi = grid_start_index; gi < grid_start_index + 3; gi++)
                {
                    let line_index = Math.floor(gi/9)
                    sudoku[gi] = number
                    sudoku[gi + 9] = number
                    sudoku[gi + 18] = number

                }                
            }

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

        }
            
        return sudoku;
    }
}