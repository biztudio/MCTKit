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
                license_code:[]
        }
    },
    created: function () {
        if(this.prop_length){
            this.license_code = []
            for(let index=0; index < this.prop_length; index++){
                this.license_code[index] = {id:(this.id +'_keycode'+ index), value:'TBD_I'}
            }
        }
    },
    watch:{
        prop_length:function(new_section_count){
            this.prop_length = new_section_count
            if(new_section_count){
                this.license_code = []
                for(let index = 0; index < new_section_count; index++){
                    this.license_code[index] = {id:(this.id + '_keycode'+ index), value:'TBD_C'}
                }
            }
        }
    },
    props:[
        'license_keycode',//TODO
        'prop_length',
        'id'
    ]
}