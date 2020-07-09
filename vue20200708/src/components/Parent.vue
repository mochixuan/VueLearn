<template>
    <div class="container">
        Parent
        <span>postFontSize={{message}}</span>
        <button @click="changeData">父参数: {{message}}</button>
        <button @click="changeErrorData">传错误的值给Child</button>

        <Child v-on:receive-data="fromChild($event)" v-bind:parentMessage="message">
            天下第一: {{person.name}}
            <template v-slot:header>
                <h1>我是v-slot:header</h1>
            </template>
            <template v-slot:footer>
                <h1>我是v-slot:footer</h1>
            </template>
            <template>
                <h1>我是v-slot:default</h1>
            </template>
        </Child>
        <Child v-slot="childMes">
            {{childMes.name}}
        </Child>
    </div>
</template>
<script>
import Child from '../components/Child'
export default {
    components: {
        Child,
    },
    props: {
        name: String,
    },
    provide: function() {
        return {
            tip: '我是父组件的提示',
        }
    },
    data: function() {
        return {
            message: 1,
            person: {
                name: 'mochixuan',
                age: 24
            }
        }
    },
    methods: {
        fromChild: function(data) {
            this.message = this.message + 1;
            console.log('from child ',data)
        },
        changeData: function() {
            this.message = this.message + 1;
        },
        changeErrorData: function() {
            this.message = 'mochixuan'
        },
        updatd: function() {
            console.warn('updata')
        }
    },
    beforeUpdate: function() {
        console.warn('Parent beforUpdate')
    },
    mounted: function() {
        this.$once('hook:beforeUpdate', function(){
            console.warn('listen parent beforeUpdate')
        })  
    }
}
</script>
<style scoped>
    .container {
        margin: 10px;
        background-color: beige;
    }
</style>