<template>
    <div>
        Hello Word
        <div v-html="htmlData"></div>
        <button v-bind:disabled="isButtonDisabled" :class="{scale2: isActive}">Button</button>
        <button @click.once="sayHello('1')">
            sayHello2
            <button @click="sayHello('2')">sayHello2 </button>
        </button>
        <a href="https://www.baidu.com/" v-bind:style="{fontSize: 32+'px'}" v-show="false">跳转百度</a>
        <input v-model.lazy="message" />
        <span>{{message}}</span>
        <button @click="addItem()">{{items.join('-')}}</button>
    </div>
</template>
<script>
export default {
    data: function() {
        return {
            htmlData: '<span>我是Html</span>',
            isButtonDisabled: null,
            link: "https://www.baidu.com/",
            isActive: false,
            message: 'mochixuan',
            items: [1,2,3]
        }
    },
    methods: {
        sayHello: function(data) {
            console.log('sayHello', data)
            return true
        },
        addItem: function() {
            // this.items.push(1); //可以触发
            this.items[0] = 3; //不触发
        }
    }
}
</script>
<style scoped>
    .scale2 {
        transform: scale(2);
    }
</style>