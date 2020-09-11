<template>
    <div>
        <h5>我是动画</h5>
        <div>
            <button @click="isShow=!isShow">切换状态</button>
            <transition name="fade">
                <p v-if="isShow">Hello</p>
            </transition>
        </div>
        <div :class="{anim: true,'anim-run': animStatus}" @click="animStatus=!animStatus"></div>
    </div>
</template>
<script>
export default {
    data: function() {
        return {
            isShow: true,
            animStatus: true,
        }
    },
    methods: {
        changeData: function() {
            this.isShow = !this.isShow;
        }
    },
}
</script>
<style scoped>
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
    .anim {
        width: 100px;
        height: 100px;
        background-color: bisque;
    }
    .anim-run {
        transform: rotate(360deg);
        transition: all 3s;
    }
</style>