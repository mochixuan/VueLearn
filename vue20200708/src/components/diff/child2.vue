<template>
    <div>Child2</div>
</template>
<script>
export default {
    created: function() {
        console.warn('created 2');
    },
    beforeMount: function() {
        console.warn('beforeMount 2');
    }
}
</script>