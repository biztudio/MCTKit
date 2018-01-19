/*jshint esversion: 6 */
import mathkit from './mathkit'

export default{   
    getSudokuSourceData:function(level = 3){
        let x_grid_count = level
        let y_grid_count = level
        let x_cell_count_per_grid = 3
        let y_cell_count_per_grid = 3
        let grid_seed = [1,2,3,4,5,6,7,8,9]
        let grid_0 = []//init grid
        let temp_pool = grid_seed.slice(0)
        for(let index in grid_seed){
            let index = mathkit.get_random_number_index(temp_pool.length);
            let number = temp_pool[index];
            grid_0.push(number)
            temp_pool.splice(index, 1)
        }        
        if(level == 1) return grid_0
        
        let sudoku = []
        let max_count_per_line = x_grid_count * x_cell_count_per_grid
        let max_count_per_column = y_grid_count * y_cell_count_per_grid
        let max_lenght = max_count_per_column * max_count_per_line
        for(let index = 0; index < max_lenght; index++){
            let index_in_line = index % max_count_per_line
            let line_index = Math.floor(index / max_count_per_line)
            if(index_in_line < x_cell_count_per_grid && line_index < y_cell_count_per_grid){//first grid is initlized with grid 0
                let grid_0_index = line_index * x_cell_count_per_grid  + index_in_line
                sudoku.push(grid_0[grid_0_index])
            }
            else{
                sudoku.push(0)
            }
        }                
        //fill 1st line
        let rest_for_1st_line = grid_seed.slice(0).filter(s => !grid_0.slice(0, x_cell_count_per_grid).includes(s))
        console.log(rest_for_1st_line)
        for(let index = x_cell_count_per_grid; index < max_count_per_line; index++){
            let index_rest = mathkit.get_random_number_index(rest_for_1st_line.length);
            let number = rest_for_1st_line[index_rest];
            console.log('rest index: ' + index_rest + ' is ' + number)
            sudoku[index] = number
            rest_for_1st_line.splice(index_rest, 1)
        }
        
        console.log(grid_0)
        console.log(sudoku)
        return sudoku
    }
}