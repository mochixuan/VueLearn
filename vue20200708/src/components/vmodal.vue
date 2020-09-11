<template>
    <div>
        实现双向绑定
        <button @click="changeData()">测试this.setState改变后执行顺序</button>
        <div>
            {{items.person.name}}
            <button @click="items.person.name='mochixuan1'">改变：items.person.name</button>
            <button @click="testBindData()">测试双向绑定{{this.age}}</button>
        </div>
    </div>
</template>
<script>
// import {bindData} from './../utils/twobind'
export default {
    data: function() {
        return {
            items: {
                person: {
                    name: 'mochixuan',
                    age: 24
                }
            },
            age: 0,
        }
    },
    methods: {
        
        changeData: function() {
            console.warn('--------start', this.age);

            Promise.resolve(12).then(()=>{
                console.warn('前promise: ', this.age);
            })
            console.warn('age1', this.age)
            this.age = this.age + 1;
            console.warn('age2', this.age)
            Promise.resolve(12).then(()=>{
                console.warn('后promise: ', this.age);
            })
            console.warn('--------end', this.age);
        },
        testBindData: function() {
            // bindData()
            this.age = 2;
        },
    },
    beforeUpdate: function() {
        console.log('beforeUpdate')
    },
    updated: function() {
        console.log('updated')
    },
    mounted: function() {
        this.changeData();
    }
}
</script>
<style scoped>

</style>