/*jshint esversion: 6 */
import Vue from 'vue';
import numbercolumn from './components/numbercolumn/numbercolumn.vue';
import numbergrid from './components/numbergrid/numbergrid.vue';
import alphabetgrid from './components/alphabetgrid/alphabetgrid.vue';
import {Input } from 'iview';

Vue.component('Input', Input);
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
        case_mode_model:1,
        case_list:[
            {
                value: '1',
                label: 'Upper Case'
            },
            {
                value: '0',
                label: 'Lower Case'
            },
            {
                value: '2',
                label: 'Number'
            }
        ],
        group_aln_list:[
            {value: '1', label: '1 group'},{value: '2', label: '2 groups'}
            ,{value: '3', label: '3 groups'},{value: '4', label: '4 groups'},{value: '5', label: '5 groups'},{value: '6', label: '6 groups'}
            ,{value: '7', label: '7 groups'},{value: '8', label: '8 groups'}
        ]
    },
    methods:{
        add_new_todoitem:function(){
            console.log('Hi, todo.')
        }
    }
});