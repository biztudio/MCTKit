<template>
   <div :id='id'>
        <span v-for='(code, index) in license_code'>
            <span v-if="index < license_code.length - 1">
                <input type="text" style='width: 60px;' maxlength='5' :id='code.id' v-model='code.value' />-</span>

            <span v-else>
                <input type="text" style='width: 60px;' maxlength='5' :id='code.id' v-model='code.value' /></span>
        </span>
        <span :id='keylabel_id' v-text="licensekeycode"></span>
   </div>
</template>
<script src='./licensecode.js'></script>