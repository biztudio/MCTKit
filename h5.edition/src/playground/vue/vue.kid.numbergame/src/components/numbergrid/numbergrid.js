/*jshint esversion: 6 */
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
   /**/
 
     mount: function(){
         this.draw_grid();
     },
 /**/
     watch:{
         group:function(){
             this.draw_grid();
         },
         grid_level:function(){
             this.draw_grid();
         }
     },

    methods:{
        draw_grid:function(){
            let gl = this.grid_level?this.grid_level:0;
            if(gl <= 2 || gl > 10){
                alert('请设置更有意义的级别(3~10)！');
                return;
            }
            let hl = gl;
            let wl = gl;
            let gp = this.group?this.group:0;
            let digit_pool = [];
            let styleObject = {
                color: '#000000',
                fontWeight: 'bold',
                fontSize: '20px'
            };
            for(let i = 1; i <= Math.pow(gl,2);i++){
                digit_pool.push(i);
            }
            let temp_pool = digit_pool.slice(0);
            this._grids = [];
            for(let g = 0; g < gp; g++){
                let grid = [];
                for(let h = 0; h < hl; h++){
                    let row = [];
                    for(let w = 0; w < wl; w++){
                        let index = mathkit.get_random_number_index(temp_pool.length);
                        let number = temp_pool[index];
                        row.push(number);
                        temp_pool.splice(index, 1);
                    }
                    grid.push(row);
                }
                temp_pool = digit_pool.slice(0);
                this._grids.push({data:grid, style_config: styleObject});
            }
        }
    },

    props:[
        'group',
        'grid_level',
        'id'
    ]
};