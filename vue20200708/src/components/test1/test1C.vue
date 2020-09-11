<template>
    <span>Child1{{age.b}}</span>
</template>
<script>
export default {
    props: {
        age: Object,
    },
    beforeUpdate: function() {
        console.log('child1 beforeUpdate')
    },
    updated: function() {
        console.log('child1 updated')
    }
}
</script>
<style scoped>
    
</style>