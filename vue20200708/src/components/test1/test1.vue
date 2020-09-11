<template>
    <div class="container">
        <Test1C v-bind:age="age"/>
        <Test2C />
        <input @input="change" :value="name" ref="name"/>
        <div>{{name}}</div>
        <button @click="handleName()">改变</button>
        <button ref="btn" @click="changeMir" :value="testMir">测试微任务{{testMir}}</button>
    </div>
</template>
<script>
import Test1C from './test1C'
import Test2C from './test2C'
export default {
    data: function() {
        return {
            age: {
                age: 1,
                b: 1,
            },
            name: 'mochixuan',
            testMir: 1,
        }
    },
    components: {
        Test1C: Test1C,
        Test2C: Test2C,
    },
    methods: {
        changeMir: function(){
            var channel = new MessageChannel();
            var port1 = channel.port1;
            var port2 = channel.port2;
            port1.onmessage = () => {
                console.log("port1：" + this.$refs.btn.value);
            }
            port2.onmessage = () => {
                console.log("port2：" + this.$refs.btn.value);
            }
            Promise.resolve().then(() => {
                console.warn('p1', this.$refs.btn.value)
            })
            setTimeout(()=>{
                console.warn('s1', this.$refs.btn.value)
            }, 0)
            this.testMir = this.testMir + 1;
            
            setTimeout(()=>{
                console.warn('s2', this.$refs.btn.value)
            }, 0)
            Promise.resolve().then(() => {
                console.warn('p2', this.$refs.btn.value)
            })
            setImmediate(()=>{
                console.warn('setImmediate')
            })
            port2.postMessage("发送给port1");
            port1.postMessage("发送给port2");
        },
        add: function() {
            this.age.age = this.age.age + 1;
        },
        change: function(e) {
            this.name = e.target.value;
        },
        handleName: function() {
            console.warn(this.$refs.name.value);
            this.$refs.name.value = 'refs改变你'
            console.warn(this.$refs.name.value)
        }
    },
    beforeUpdate: function() {
        // console.log('P beforeUpdate')
    },
    updated: function() {
        // console.log('P updated')
    }
}
</script>
<style scoped>
    .container {
        width: 200px;
        height: 200px;
        background-color: wheat;
    }
</style>