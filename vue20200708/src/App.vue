<template>
  <div id="app">
    <div class="box">
      <DiffParent />
    </div>
    <div class="box">
      <Test1 />
    </div>
    <div class="box">
      <VModal />
    </div>
    <div class="box">
      <HelloWord></HelloWord>
    </div>
    <div class="box">
      <Parent/>
    </div>
    <div class="box">
      <base-cmp1></base-cmp1>
    </div>
    <div class="box">
      <AnimationLearn />
    </div>
    <div class="box">
      <RenderCMP/>
      <RenderCMPJSX/>
    </div>
    <div class="box">
      我是store数据count: {{$store.state.count}}
      <button @click="$store.commit('increment')">改变store-state-count</button>
    </div>
  </div>
</template>

<script>
import HelloWord from './components/HelloWord'
import Parent from './components/Parent'
import VModal from './components/vmodal'
import AnimationLearn from './components/animtion-learn'
import RenderCMP from './components/render-cmp'
import RenderCMPJSX from './components/render-cmp1'
import Test1 from './components/test1/test1'
import DiffParent from './components/diff/diffParent'

export default {
  name: 'App',
  components: {
    HelloWord,
    Parent,
    AnimationLearn,
    RenderCMP,
    RenderCMPJSX,
    VModal,
    Test1,
    DiffParent,
  },
  mounted: function() {
    
  }
}


</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.box {
  border: 1px solid red;
  margin: 20px;
}
</style>
