/*jshint esversion: 6 */
import mathkit from './mathkit'

export default{   
    checkSudoku:function(sudoku){

    },

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
        if(level != 3) return grid_0
        
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
        for(let index = x_cell_count_per_grid; index < max_count_per_line; index++){
            let index_rest = mathkit.get_random_number_index(rest_for_1st_line.length);
            let number = rest_for_1st_line[index_rest];
            sudoku[index] = number
            rest_for_1st_line.splice(index_rest, 1)
        }
       
        //fill 2nd line
        let ref_digits_grid0_line2 = grid_0.slice(3, 6)
        let rest_for_2nd_line = grid_seed.slice(0).filter(s => !ref_digits_grid0_line2.includes(s))
        let grid2_line1 = sudoku.slice(3,6)
        let grid3_line1 = sudoku.slice(6,9)
        let grid2_line2 = []
        let available_for_grid2_line2 = rest_for_2nd_line.filter(r => (!ref_digits_grid0_line2.includes(r) && !grid2_line1.includes(r)))
        let grid2_line2_ref_grid3_line1 = available_for_grid2_line2.filter(r => grid3_line1.includes(r))
        if(grid2_line2_ref_grid3_line1){           
            grid2_line2 = grid2_line2_ref_grid3_line1
            if(grid2_line2_ref_grid3_line1.length != 3){
                let grid2_line2_beyond_grid3_line1 = available_for_grid2_line2.filter(r => !grid2_line2_ref_grid3_line1.includes(r))
                grid2_line2 = grid2_line2.concat(grid2_line2_beyond_grid3_line1).slice(0, 3)
            }
        }
        else{
            grid2_line2 = available_for_grid2_line2.slice(0, 3).reverse()
        }
        let grid3_line2 = grid_seed.filter(s => !grid2_line2.includes(s) && !ref_digits_grid0_line2.includes(s)).reverse()
        let rest_line2 = grid2_line2.concat(grid3_line2)
        for(let index in rest_line2){
            let sudoindex = (max_count_per_line + x_cell_count_per_grid) + index * 1
            sudoku[sudoindex] = rest_line2[index]
        }

        //fill 3rd line
        let grid2_line3 = grid_seed.filter(s => !grid2_line2.includes(s) && !grid2_line1.includes(s))
        let grid3_line3 = grid_seed.filter(s => !grid3_line2.includes(s) && !grid3_line1.includes(s))
        for(let index in grid2_line3.slice(0)){
            let index_2 = mathkit.get_random_number_index(grid2_line3.length);
            let index_3 = mathkit.get_random_number_index(grid3_line3.length);
            let sudoindex_2 = (2* max_count_per_line + x_cell_count_per_grid) + index * 1
            let sudoindex_3 = (2* max_count_per_line + 2 * x_cell_count_per_grid) + index * 1
            sudoku[sudoindex_2] = grid2_line3[index_2]
            sudoku[sudoindex_3] = grid3_line3[index_3]
            grid2_line3.splice(index_2, 1)
            grid3_line3.splice(index_3, 1)
        }

        for(let line_index = 3; line_index < 9; line_index++){//scan line
            let source = grid_seed.slice(0);
            let number = 1;

            for(let index_in_line = 0; index_in_line < 9; index_in_line++){//scan index in line               
                let index_flag = index_in_line;
                let rest_digits_in_column = [];
                for(let position = 0; position < 9; position++){
                    let digit_on_pos = sudoku[position * 9 + index_in_line]
                    if(digit_on_pos > 0){
                        rest_digits_in_column.push(digit_on_pos)
                    }
                }

                let sudokukindex = line_index * 9 + index_in_line;
                let grid_column_index = Math.floor(index_in_line/3);
                let grid_line_index = Math.floor(line_index/3);
                let rest_digits_in_grid = [];
                let init_grid_index = 9 * (grid_line_index  * 3) + (grid_column_index) * 3; 
                rest_digits_in_grid.push(sudoku[init_grid_index]);
                rest_digits_in_grid.push(sudoku[init_grid_index+1]);
                rest_digits_in_grid.push(sudoku[init_grid_index+2]);
                rest_digits_in_grid.push(sudoku[init_grid_index+9]);
                rest_digits_in_grid.push(sudoku[init_grid_index+10]);
                rest_digits_in_grid.push(sudoku[init_grid_index+11]);
                rest_digits_in_grid.push(sudoku[init_grid_index+18]);
                rest_digits_in_grid.push(sudoku[init_grid_index+19]);
                rest_digits_in_grid.push(sudoku[init_grid_index+20]);
                rest_digits_in_grid = rest_digits_in_grid.filter(g => g > 0);
                
                let digits_for_cell = source.filter(s => !rest_digits_in_column.includes(s) && !rest_digits_in_grid.includes(s));
                let selectedindex = mathkit.get_random_number_index(digits_for_cell.length);
                number = digits_for_cell[selectedindex];

                if(!rest_digits_in_column.includes(number)){
                    sudoku[sudokukindex] = number;
                    let sourceindex = source.indexOf(number);
                    source.splice(sourceindex, 1);
                }
                else{
                    index_in_line = index_flag;
                }

                if(line_index == 3 && sudokukindex < 39){
                    console.log(sudokukindex)
                    console.log(init_grid_index)
                    console.log(sudoku[sudokukindex])
                    console.log(sudoku[init_grid_index])
                    //console.log(rest_digits_in_column)
                    console.log(rest_digits_in_grid)
                    console.log(digits_for_cell)
                }
            }

        }        
        return sudoku;
    }
}