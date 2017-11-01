<template>
  <div :id='id'>
    <div v-for='(g, gi) in _number_columns'>
      <div>{{gi}}</div>
      <p></p>
      <table>
        <tr v-for='(h, i) in g'>
          <td v-for="(r, i) in h">{{r}}</td>
        </tr>
      </table>
    </div>
  </div>    
</template>
<script src='./numbercolumn.js'></script>