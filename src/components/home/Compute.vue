<template>
  <div>
    <h2>{{ msg }}</h2>
    <h3>{{title}}</h3>
    <h4>{{global.title}}</h4>
  </div>
</template>

<script>
import * as types from '../../const/type.js'
export default {
  name: 'Compute',
  data() {
    return {
      msg: '我是compute'
    }
  },
  // props: ["title"]  //需要加双引号
  props: {
    title: {
      type: String,  //首字母大写
      default: ''
    }
  },
  created() {
    console.log(types.TEST_INCERMENT);
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
