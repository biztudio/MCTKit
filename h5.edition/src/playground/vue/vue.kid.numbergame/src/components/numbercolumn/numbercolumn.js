/*
    在 .js 檔案的上方 加入下如下comment便可以不再顯示Warning， 
    形如： ‘let’ is available in ES6 (use ‘esversion: 6’) or Mozilla JS extensions (use moz).
*/
/*jshint esversion: 6 */
import mathkit from './mathkit';


export default {
    data(){
        return{
            _number_columns:[],//3D array: digit count per row / rows count / count of columns     
            _digit_pool:[]
        }
    },

    created: function(){
       this.draw_columns();
    },
/**/
    watch:{
        group:function(){
            this.draw_columns();
        },
        height:function(){
            this.draw_columns();
        },
        width:function(){
            this.draw_columns();
        }
    },

    methods:{

        draw_columns:function(){
            let gl = this.group?this.group:0;
            let hl = this.height?this.height:0;
            let wl = this.width?this.width:0;
            if(gl > 10 || hl > 20 || wl > 10){
                alert('参数设置超限！');
                return;
            }
            let height_per_group = hl * 30;
            let styleObject = {
                color: '#000000',
                fontWeight: 'bold',
                fontSize: '30px',
                marginTop:'10px',
                position: 'absolute'
            };
            this._number_columns = [];
            this._digit_pool = [1,2,3,4,5,6,7,8,9];
            for(let g = 0; g < gl; g++){
                let column = [];
                for(let h = 0; h < hl; h++){
                    let row = [];
                    for(let w = 0; w < wl; w++){
                        let index = mathkit.get_random_number_index();
                        let number = this._digit_pool[index];
                        row.push(number);
                    }
                    column.push(row);
                }
                this._number_columns.push({data:column, style_config: styleObject});
            }
            //console.log(this._number_columns)
        }
    },

    props:[
        'width',
        'height',
        'group',
        'id'
    ]
}