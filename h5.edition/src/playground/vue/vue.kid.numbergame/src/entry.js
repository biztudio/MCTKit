/*jshint esversion: 6 */
import Vue from 'vue';
//import Vuex from 'vuex';
import 'babel-polyfill';
import numbercolumn from './components/numbercolumn/numbercolumn.vue';
import numbergrid from './components/numbergrid/numbergrid.vue';
import alphabetgrid from './components/alphabetgrid/alphabetgrid.vue';
import sudoku from './components/sudoku/sudoku.vue';
import {Input } from 'iview';

Vue.component('Input', Input);
Vue.component('numbergrid', numbergrid);
Vue.component('numbercolumn', numbercolumn);
Vue.component('alphabetgrid', alphabetgrid);
Vue.component('sudoku',sudoku);
//Vue.use(Vuex);

var capp = new Vue({
    el:"#capp",
    data:{
        sudoku_level_model:3,
        sudoku_mode_model:0,
        sudoku_level_list:[
            {value:'2', label:'Easy'},
            {value:'3', label:'Normal'},
            {value:'4', label:'Interesting'},
            {value:'5', label:'Challenge'},
            {value:'6', label:'King'}             
        ],
        sudoku_mode_list:[
            {value:'0', label:'Practice'},
            {value:'1', label:'Answer'}
        ],

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
                value: '3',
                label: 'Mixed Mode'
            },
            {
                value: '4',
                label: 'Study Mode'
            },
            {
                value: '2',
                label: 'Number Mode'
            }
        ],
        group_aln_list:[
            {value: '1', label: '1 group'},{value: '2', label: '2 groups'}
            ,{value: '3', label: '3 groups'},{value: '4', label: '4 groups'},{value: '5', label: '5 groups'},{value: '6', label: '6 groups'}
            ,{value: '7', label: '7 groups'},{value: '8', label: '8 groups'}
        ]
    },

    watch:{
        sudoku_level_list:function(){
            //this.sudoku_level_model = 0
        }
    },

    methods:{
        add_new_todoitem:function(){
            console.log('Hi, todo.')
        }
    }
});