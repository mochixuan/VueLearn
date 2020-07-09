<template>
    <div class="container">
        Child <button v-on:click="sendDataToParent">传输数据</button>
        <span>来自父的参数{{parentMessage}}</span>
        <div>
            <slot v-bind:childMes="childMes"></slot>
        </div>
        <div>来自父注入:{{tip}}</div>
    </div>
</template>
<script>
export default {
    props: {
        parentMessage: {
            type: Number,
            default: 0,
        }
    },
    inject: ['tip'],
    data: function() {
        return {
            message: 1,
            childMes: {
                name: 'Child Mes',
                age: 22,
            }
        }
    },
    methods: {
        sendDataToParent: function() {
           this.$emit('receive-data', [{a: 1, b: 2},1]);
        },
    },
    beforeUpdate: function() {
        console.warn('Child beforeUpdate')
    }
}
</script>
<style scoped>
    .container {
        margin: 10px;
        background-color: beige;
        border: 1px solid antiquewhite;
    }
</style>