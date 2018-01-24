/*jshint esversion: 6 */
import sudokukit from '../common/sudokukit'

export default{
    data(){
        console.log('new data...')
        return{
            _grid_container:[],
            _grids:[],
            _sudokuPuzzle:[]
        }
    },

    created:function(){
       this._sudokuPuzzle = sudokukit.getSudokuPuzzle(this.level).SudokuPuzzle
       this.drawsudoku()
    },

    watch:{
        level:function(){
            this._sudokuPuzzle = sudokukit.getSudokuPuzzle(this.level).SudokuPuzzle
            this.drawsudoku()
        }
    },

    methods:{

        drawsudoku:function(){
            let x_axis_length = 3;
            let y_axis_length = 3;
            let gp = 9;
            this._grids = [];
            let top_pos = 25;
            let left_pos = 5;
            let display_mode = (this.mode!= undefined && this.mode && this.mode > 0)?1:0
            let grid_init_indes = sudokukit.getStartIndesInGrids(this._sudokuPuzzle)
            for(let g = 0; g < gp; g++){
                    let grid = [];
                    let grid_init_index = grid_init_indes[g]
                    let grid_indes = sudokukit.getIndexListInGrid(grid_init_index)
                    let grid_cell_value_list = []
                    for(let grid_index of grid_indes){
                        grid_cell_value_list.push(this._sudokuPuzzle[grid_index])
                    }
                    for(let y_axis_index = 0; y_axis_index < y_axis_length; y_axis_index++){
                        let row = [];
                        for(let x_axis_index = 0; x_axis_index < x_axis_length; x_axis_index++){
                            if(grid_cell_value_list.length > 0){
                                let letter = grid_cell_value_list.shift();
                                row.push(letter)
                            }                            
                        }  
                        grid.push(row);                  
                    }
                    let top =  (top_pos + 155 * parseInt(g/3));
                    let left =  (left_pos + 155 * ((g)%3));
                    let styleObject = {
                        color: '#000000',
                        fontWeight: 'bold',
                        fontSize: '25px',
                        position:'absolute',
                        top:( top + 'px'),
                        left:(left + 'px')
                    };
                    this._grids.push({data:grid, style_config: styleObject});
            }
        }
    },

    props:[
        'group',
        'level',
        'mode',
        'id'
    ]
}