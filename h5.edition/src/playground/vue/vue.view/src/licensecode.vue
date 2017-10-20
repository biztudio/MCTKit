<template>
   <div >
        <span v-for='(code, index) in license_code'>
            <span v-if="index < license_code.length - 1">
                <input type="text" style='width: 60px;' maxlength='5' :id='code.id' @keyup="recal_keycode($event, index)" :value='code.value'/>-</span>

            <span v-else>
                <input type="text" style='width: 60px;' maxlength='5' :id='code.id' @keyup="recal_keycode($event, index)" :value='code.value'/></span>
        </span>
        <!--<hidden :id='keylabel_id'>{{licensekeycode}}</hidden>-->
        <div :id='keylabel_id'>{{licensekeycode}}</div>
   </div>
</template>
<script src='./licensecode.js'></script>