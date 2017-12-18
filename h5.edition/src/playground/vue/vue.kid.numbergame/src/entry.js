/*jshint esversion: 6 */
import Vue from 'vue';
import numbercolumn from './components/numbercolumn/numbercolumn.vue';
import numbergrid from './components/numbergrid/numbergrid.vue';
import alphabetgrid from './components/alphabetgrid/alphabetgrid.vue';

Vue.component('numbergrid', numbergrid);
Vue.component('numbercolumn', numbercolumn);
Vue.component('alphabetgrid', alphabetgrid);

var capp = new Vue({
    el:"#capp",
    data:{
        group_model:1,
        height_model:10,
        width_model:3,
        gridlevel_model:5,
        case_mode_model:1
    },
    methods:{
        add_new_todoitem:function(){
            console.log('Hi, todo.')
        }
    }
});