/*jshint esversion: 6 */
import alphabetkit from '../common/alphabet';
import mathkit from '../common/mathkit';

export default {
    data(){
        return{
            _grids:[]
        }
    },

    created: function(){
        this.draw_grid();
     },
 
    mount: function(){
        this.draw_grid();
    },

    watch:{
        group:function(){
            this.draw_grid();
        },

        case_mode:function(){
            this.draw_grid();
        }
    },

    methods:{
        draw_grid:function(){
            let number_grid_case = (this.case_mode == 2);
            let mixed_grid_case = (this.case_mode == 3);
            let study_grid_case = (this.case_mode == 4);
            let gp = study_grid_case?3:(this.group?this.group:1);
            let x_axis_length = number_grid_case?5:6;
            let y_axis_length = 5;
            let to_upper = (this.case_mode == 1);
            let grid_cell_value_list = [];
            let digit_pool = [];
            if(number_grid_case || study_grid_case){
                for(let i = 1; i <= x_axis_length * y_axis_length; i++){
                    digit_pool.push(i);
                }
            }
            this._grids = [];           
            let top_pos = 30;
            let left_pos = 10;
            for(let g = 0; g < gp; g++){
                let grid = [];
                if(number_grid_case){
                    let temp_pool = digit_pool.slice(0);
                    for(let i = 0; i < digit_pool.length; i++){
                        let index = mathkit.get_random_number_index(temp_pool.length);
                        let number = temp_pool[index];
                        grid_cell_value_list.push(number);
                        temp_pool.splice(index, 1);
                    }
                }
                else if(study_grid_case){                    
                    grid_cell_value_list = (g < 2)?alphabetkit.get_letter_list(g == 1):digit_pool.slice(0);
                    grid_cell_value_list.reverse();
                }
                else{
                    grid_cell_value_list = alphabetkit.get_letter_list_random(to_upper);
                }
                for(let y_axis_index = 0; y_axis_index < y_axis_length; y_axis_index++){
                    let row = [];
                    for(let x_axis_index = 0; x_axis_index < x_axis_length; x_axis_index++){
                        if(grid_cell_value_list.length > 0){
                            let letter = grid_cell_value_list.pop();
                            if(mixed_grid_case){
                                let lucky_index = mathkit.get_random_number_index(x_axis_length);
                                if (lucky_index == x_axis_index || 
                                    (g == lucky_index && x_axis_index == 0) ||
                                    (g%(lucky_index + 1) == x_axis_index && g*lucky_index*x_axis_index > 0) ||
                                    (g%(lucky_index + 1) == y_axis_index && g*lucky_index*y_axis_index > 0) 
                                ){
                                        if( letter != 'i'/*since 'I' looks same as 'l' in case*/){
                                            letter = letter.toUpperCase();
                                    }
                                }
                            }
                            row.push(letter);
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
                    fontSize: (number_grid_case?'25px':'30px'),
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
        'case_mode',
        'id'
    ]
}