<template>
  <div :id='id'>
    <div style="display:none">{{group}}.{{grid_level}}</div>
    <div v-for='(g, gi) in _grids' :style="g.style_config" draggable="true" class="columngroup">
      <table class="grid_container">
        <thead>
          <tr>
            <th :colspan='g.data[0].length'>第 {{gi+1}} 组</th>
          </tr>
        </thead>
        <tr v-for='(h, i) in g.data'>
            <td v-for="(r, i) in h" style="border:solid#000 1px;">
              <div style="width:50px;height:50px;text-align:center;position:relative;top:15px;">{{r}}</div>
            </td>
        </tr>
      </table>
    </div>
  </div>    
</template>
<style>
[draggable=true] {
    cursor: move;
}

.grid_container{
    border-collapse:collapse;border:none;
}

.grid_cell{
    border:solid#000 1px;
}

.columngroup {
    max-width: 500px;
}
</style>

<script src='./numbergrid.js'></script>