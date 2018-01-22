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
        let sudoku = []
        let max_count_per_line = x_grid_count * x_cell_count_per_grid
        let max_count_per_column = y_grid_count * y_cell_count_per_grid
        let max_lenght = max_count_per_column * max_count_per_line
        for(let index = 0; index < max_lenght; index++){ sudoku.push(0) }

        let grid_template = this.generateSeedArray(grid_seed)
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
        console.log(grid_template)
        console.log(grid_init_indes)        
        let grid0_start_index = grid_init_indes.shift()
        
        sudoku[grid0_start_index]      = grid_template[0]
        sudoku[grid0_start_index + 1]  = grid_template[1]
        sudoku[grid0_start_index + 2]  = grid_template[2]

        sudoku[grid0_start_index + 9]  = grid_template[3]
        sudoku[grid0_start_index + 10] = grid_template[4]
        sudoku[grid0_start_index + 11] = grid_template[5]

        sudoku[grid0_start_index + 18] = grid_template[6]
        sudoku[grid0_start_index + 19] = grid_template[7]
        sudoku[grid0_start_index + 20] = grid_template[8]

        let number = grid_template.shift()
        sudoku[28] = number
        sudoku[56] = number

        sudoku[12] = number
        sudoku[40] = number
        sudoku[68] = number

        sudoku[24] = number
        sudoku[52] = number
        sudoku[80] = number

        
        for(let gindex in grid_init_indes){
            /*
            gindex = gindex * 1            
            if(gindex == 0){
                    sudoku[gindex]      = grid_template[0]
                    sudoku[gindex + 9]  = grid_template[1]
                    sudoku[gindex + 18] = grid_template[2]
                    sudoku[gindex + 1]  = grid_template[3]
                    sudoku[gindex + 10] = grid_template[4]
                    sudoku[gindex + 19] = grid_template[5]
                    sudoku[gindex + 2]  = grid_template[6]
                    sudoku[gindex + 11] = grid_template[7]
                    sudoku[gindex + 20] = grid_template[8]
            }
            else if(gindex == 1){
                sudoku[gindex]      = grid_template[2]
                sudoku[gindex + 9]  = grid_template[0]
                sudoku[gindex + 18] = grid_template[1]
                sudoku[gindex + 1]  = grid_template[2]
                sudoku[gindex + 10] = grid_template[3]
                sudoku[gindex + 19] = grid_template[]
                sudoku[gindex + 2]  = grid_template[6]
                sudoku[gindex + 11] = grid_template[7]
                sudoku[gindex + 20] = grid_template[8]                
            }
            */
        }

            
        return sudoku;
    }
}