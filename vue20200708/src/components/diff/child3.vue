<template>
    <div>Child3</div>
</template>
<script>
export default {
    created: function() {
        console.warn('created 3');
    },
    beforeMount: function() {
        console.warn('beforeMount 3');
    }
}
</script>