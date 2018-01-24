/*jshint esversion: 6 */
import sudokukit from '../common/sudokukit'

export default{
    data(){
        console.log('new data...')
        return{
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
            let x_axis_length = 9;
            let y_axis_length = 9;
            let gp = 1;
            this._grids = [];
            let top_pos = 30;
            let left_pos = 10;
            let display_mode = (this.mode!= undefined && this.mode && this.mode > 0)?1:0
            for(let g = 0; g < gp; g++){
                let grid = [];
                let grid_cell_value_list = this._sudokuPuzzle
                for(let y_axis_index = 0; y_axis_index < y_axis_length; y_axis_index++){
                    let row = [];
                    for(let x_axis_index = 0; x_axis_index < x_axis_length; x_axis_index++){
                        if(grid_cell_value_list.length > 0){
                            let letter = grid_cell_value_list.shift();
                            row.push(letter)
                            /*
                            if(display_mode <= 0){
                                row.push(letter.display);
                            }
                            else{
                                row.push(letter.value)
                            }
                            */
                        }
                        else{
                            row.push('');
                        }
                    }  
                    grid.push(row);                  
                }
                let top =  (top_pos + 400 * parseInt(g/4));
                let left =  (left_pos + 360 * ((g)%4));
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