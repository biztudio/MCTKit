/*jshint esversion: 6 */
import 'babel-polyfill';
import Vue from 'vue';
//import Vuex from 'vuex';
import sudoku from './components/sudoku/sudoku.vue';

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
            {value:'0', label:'Practice', default:'true'},
            {value:'1', label:'Answer'}
        ],

        group_model:1,       
    },

    methods:{
        refresh_sudoku:function(event){
            this.$refs.compsudoku.refresh_sudoku()
        }
    }
});