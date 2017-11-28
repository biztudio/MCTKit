/*jshint esversion: 6 */
import Vue from 'vue';
import numbercolumn from './components/numbercolumn/numbercolumn.vue';

Vue.component('numbercolumn', numbercolumn);

var capp = new Vue({
    el:"#capp",
    data:{
        group_model:1,
        height_model:10,
        width_model:3
    },
    methods:{
        add_new_todoitem:function(){
            console.log('Hi, todo.')
        }
    }
});