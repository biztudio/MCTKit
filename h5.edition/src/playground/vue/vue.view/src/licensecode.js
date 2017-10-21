//In a component, data-必须是一个函数!!!
//data 返回的数据会用在每个组件实例当中，因此 data 必须是一个函数。
//https://vuefe.cn/v2/guide/components.html#data-必须是一个函数

/*
在 Vue 中，父子组件之间的关系可以概述为：props 向下，events 向上。
父组件通过 props 向下传递数据给子组件，
子组件通过 events 发送消息给父组件。
*/

export default {
    data(){
            return {
                license_code:[],
                keylabel_id:''
        }
    },

    computed:{
        licensekeycode:function(){
            return this.caculate_keycode()
        }
    },

    created: function () {
        if(!this.id){
            this.keylabel_id = '_key_label_01'
        }
        else{
            this.keylabel_id = this.id + '_key_label'
        }
        this.draw_keycode_box(this.prop_length)
    },

    watch:{
        prop_length:function(boxcount){
            this.draw_keycode_box(boxcount)
        }
    },

    methods:{
        draw_keycode_box:function(boxcount){
            if(boxcount){            
                let prefix = this.keycode_id_prefix
                if(!prefix){
                    prefix = 'keycode'
                }
                this.license_code = []
                for(let index=0; index < boxcount; index++){
                    this.license_code.push({id:(prefix + '' + index), value:''})
                }
            }
        },

        caculate_keycode:function(){
            if(this.license_code && this.license_code.length > 0){
                let keycode = []
                for(let code of this.license_code){
                    if(code.value){
                        keycode.push(code.value)
                    }
                } 
                return keycode.join('-')
            }
            else{
                return ''
            }
        }
    },

    props:[
        'prop_length',
        'keycode_id_prefix',
        'id'
    ]
}