//app entry js, it loads component js lib & components
import Vue from "vue"

import todolist from './todolist.vue'
Vue.component('Todolist', todolist)
console.log('vue playground')

var papp = new Vue({
    el: "#todo-app",
    data:{
        greetings:'hello',
    },

    methods:{
        add_new_todoitem:function(){
            console.log('Hi, todo.')
        }
    }
})
/**/