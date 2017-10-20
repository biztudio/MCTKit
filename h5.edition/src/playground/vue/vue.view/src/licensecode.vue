<template>
   <div >
    <span v-for='(code, index) in license_code'>
        <span v-if="index < license_code.length - 1">
            <input type="text" style='width: 60px;' maxlength='5' :id='code.id' :value='code.value'/>-</span>

        <span v-else>
            <input type="text" style='width: 60px;' maxlength='5' :id='code.id' :value='code.value'/></span>
    </span>
   </div>
</template>
<script src='./licensecode.js'></script>