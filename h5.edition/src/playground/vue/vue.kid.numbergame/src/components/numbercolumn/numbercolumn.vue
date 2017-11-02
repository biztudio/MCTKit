<template>
  <div :id='id'>
    <div style="display:none">{{group}}.{{height}}.{{width}}</div>
    <div v-for='(g, gi) in _number_columns' :style="g.style_config">
      <table>
        <thead>
          <tr>
            <th :colspan='g.data[0].length'>第 {{gi+1}} 组</th>
          </tr>
        </thead>
        <tr v-for='(h, i) in g.data'>
          <td v-for="(r, i) in h" style="width:50px;">{{r}}</td>
        </tr>
      </table>
    </div>
  </div>    
</template>
<<style>

</style>

<script src='./numbercolumn.js'></script>