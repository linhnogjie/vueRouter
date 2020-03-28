<template>
  <div class="home">
    <!-- <h3>{{msg | filterTwo}}</h3> -->
    <!-- <h3>{{msg | trim(1)}}</h3> -->
    <!-- <h3>{{ '2018-09-14 01:05' | formaDate(MM/dd) }}</h3> -->
    <!-- <h3>{{msg | changeCase(3)}}</h3> -->
    <!-- <h3>{{msg | repeatStr(3)}}</h3> -->
    <!-- <h3>{{msg | replaceAll('ASGE','asge')}}</h3> -->
    <!-- <h3>{{msg1 | replaceStr([3,5,3],0)}}</h3>
    <h3>{{money | upDigit}}</h3>
    <h3>{{num | toDecimal2}}</h3> -->

    <!-- 通过prop传入一个静态的值给子组件，除字符串外，其他类型的数据传递需要加b-bind -->
    <v-computer title="42"></v-computer>
    <!-- v-bind动态传值 -->
    <!-- <v-computer v-bind:title="title"></v-computer> -->

  </div>
</template>

<script>
import Computer from './home/Compute'
export default {
  name: 'Home',
  data() {
    return {
      msg: 'aljsASGE',
      msg1: '13625648952',
      money: 6652132,
      num: 0.126,
      title: '我是父组件传递过来的动态值'
    }
  },
  components: {
    'v-computer': Computer
  }
}
</script>

<style scoped>
.home {
  height: 1500px;
  margin: 10px auto;
}

</style>
