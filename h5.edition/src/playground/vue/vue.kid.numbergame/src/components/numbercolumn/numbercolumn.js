/*
    在 .js 檔案的上方 加入下如下comment便可以不再顯示Warning， 
    形如： ‘let’ is available in ES6 (use ‘esversion: 6’) or Mozilla JS extensions (use moz).
*/
/*jshint esversion: 6 */
import mathkit from './mathkit';


export default {
    data(){
        return{
            _columns:[],//3D array: digit count per row / rows count / count of columns     
            _digit_pool:[1,2,3,4,5,6,7,8,9]      
        }
    },

    created: function(){

    },

    methods:{

        draw_columns:function(){
            let gl = this.group?this.group:0;
            let hl = this.height?this.height:0;
            let wl = this.witdh?this.witdh:0;
            for(let g = 0; g < gl; g++){
                let column = [];
                for(let h = 0; h < hl; h++){
                    let row = [];
                    for(let w = 0; w < wl; w++){
                        let index = mathkit.get_random_number_index();
                        let number = _digit_pool[index];
                        row.push(number);
                    }
                    console.log(row);
                    column.push(row);
                }
                //this._columns.push(column);
            }
        }
    },

    prop:[
        'witdh',
        'height',
        'group',
        'id'
    ]
}