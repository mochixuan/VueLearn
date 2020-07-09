<template>
  <div id="app">
    <div class="box">
      <HelloWord></HelloWord>
    </div>
    <div class="box">
      <Parent/>
    </div>
    <div class="box">
      <base-cmp1></base-cmp1>
    </div>
  </div>
</template>

<script>
import HelloWord from './components/HelloWord'
import Parent from './components/Parent'

export default {
  name: 'App',
  components: {
    HelloWord,
    Parent,
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
