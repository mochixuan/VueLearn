<template>
    <div>
        <div v-if="isTrue">
            <Child1/>
            <Child2/>
        </div>
        <div v-else>
            <Child2 />
            <Child1 />
        </div>
        <button @click="onChange()">改变</button>
    </div>
</template>
<script>
import Child1 from './child1'
import Child2 from './child2'
// import Child3 from './child3'
export default {
    data: function() {
        return {
            isTrue: true
        }
    },
    components: {
        Child1,
        Child2,
    },
    methods: {
        onChange: function(){
            this.isTrue = !this.isTrue;
        }
    },
    created: function() {
        console.warn('created 3');
    },
    beforeMount: function() {
        console.warn('beforeMount 3');
    }
}
</script>