//app entry js, it loads component js lib & components
import Vue from "vue"

import todolist from './todolist.vue'
import keycode  from './licensecode.vue'

//Vue.component(tagName, options)
Vue.component('todolist', todolist)
Vue.component('keycode', keycode)

console.log('vue playground')

var papp = new Vue({
    el: "#todo-app",
    data:{
        section_count:6
    },
    methods:{
        add_new_todoitem:function(){
            console.log('Hi, todo.')
        }
    }
})
/**/