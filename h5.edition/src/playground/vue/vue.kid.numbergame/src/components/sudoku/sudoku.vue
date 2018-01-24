<template>
  <div :id='id'>
    <div style="display:none">{{level}}.{{mode}}</div>

  <div style="background-color:#0066CC;width:475px;height:475px;">
      <div v-for='(g, gi) in _grids' :style="g.style_config" > 
        
          <table class="grid_container">       
            <tr v-for='(h, i) in g.data'>
                <td v-for="(r, i) in h" style="border:solid#0066CC 1px;">
                  <div style="width:50px;height:50px;text-align:center;position:relative;top:5px;">
                    <span v-if='r.display > 0 '>{{r.display}}</span>
                    <span style="font-style:oblique;color:gray" v-if='r.display <= 0 &&  mode > 0' >{{r.value}}</span>
                    <span v-if='r.display <= 0 &&  mode <= 0'><input type="text" maxlength="1" class="sudoku_input"/></span>                               
                  </div>
                </td>
            </tr>
          </table>
      </div> 
  
</template>
<style>
[draggable=true] {
    cursor: move;
}

.grid_container{
    border-collapse:collapse;border:none;
    background-color: #ffffff;
}

.grid_cell{
    border:solid#000 1px;
}

.sudoku_input{
  left: 10px;
  position: relative;
  color: #993366;
  border-color: #ffffff;
  border-style: solid;
  border-top-width: 0px;
  border-right-width: 0px;
  border-bottom-width: 1px;
  border-left-width: 0px;
  font-size: 25px;
  width: 26px
}

</style>

<script src='./sudoku.js'></script>