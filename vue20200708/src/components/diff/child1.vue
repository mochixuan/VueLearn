<template>
    <div>Child1</div>
</template>
<script>
export default {
    created: function() {
        console.warn('created 1');
    },
    beforeMount: function() {
        console.warn('beforeMount 1');
    }
}
</script>