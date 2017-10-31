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
            let gl = this.group?this.group:0
            let hl = this.height?this.height:0
            let wl = this.witdh?this.witdh:0
            for(let g = 0; g < gl; g++){
                for(let h = 0; h < hl; h++){
                    for(let w = 0; w < wl; w++){

                    }
                }
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