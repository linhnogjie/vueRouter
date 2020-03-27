<template>
  <div class="home">
    <!-- <h3>{{msg | filterTwo}}</h3> -->
    <!-- <h3>{{msg | trim(1)}}</h3> -->
    <!-- <h3>{{ '2018-09-14 01:05' | formaDate(MM/dd) }}</h3> -->
    <!-- <h3>{{msg | changeCase(3)}}</h3> -->
    <!-- <h3>{{msg | repeatStr(3)}}</h3> -->
    <!-- <h3>{{msg | replaceAll('ASGE','asge')}}</h3> -->
    <h3>{{msg1 | replaceStr([3,5,3],0)}}</h3>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      msg: 'aljsASGE',
      msg1: '13625648952'
    }
  }
}
</script>

<style scoped>
.home {
  margin: 10px auto;
}

</style>
