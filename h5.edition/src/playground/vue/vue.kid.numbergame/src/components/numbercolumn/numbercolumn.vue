<template>
  <div :id='id'>
    <div style="display:none">{{group}}.{{height}}.{{width}}</div>
    <div v-for='(g, gi) in _number_columns'>
      <div>第{{gi+1}}组</div>
      <table>
        <tr v-for='(h, i) in g'>
          <td v-for="(r, i) in h" style="width:50px;">{{r}}</td>
        </tr>
      </table>
    </div>
  </div>    
</template>
<script src='./numbercolumn.js'></script>