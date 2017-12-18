/*jshint esversion: 6 */
import alphabetkit from '../common/alphabet';

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
            let x_axis_length = 6;
            let y_axis_length = 5;
            let gp = this.group?this.group:1;
            if(gp <=0 ) return;
            let to_upper = (this.case_mode == 1);//1: to upper case / 2. to lower case
            this._grids = [];           
            let top_pos = 30;
            let left_pos = 10;
            for(let g = 0; g < gp; g++){
                let grid = [];
                let alphabet_list = alphabetkit.get_letter_list_random(to_upper);
                for(let y_axis_index = 0; y_axis_index < y_axis_length; y_axis_index++){
                    let row = [];
                    for(let x_axis_index = 0; x_axis_index < x_axis_length; x_axis_index++){
                        if(alphabet_list.length > 0){
                            let letter = alphabet_list.pop();
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
                    fontSize: '30px',
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