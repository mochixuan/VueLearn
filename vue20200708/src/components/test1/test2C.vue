<template>
    <span>Child2</span>
</template>
<script>
export default {
    beforeUpdate: function() {
        console.log('child2 beforeUpdate')
    },
    updated: function() {
        console.log('child2 updated')
    }
}
</script>
<style scoped>
    
</style>