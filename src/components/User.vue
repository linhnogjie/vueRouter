<template>
  <div class="user">
    <h1>{{ msg }}{{userName}}</h1>
  </div>
</template>

<script>
export default {
    name: 'User',
    data() {
        return {
        msg: '我是用户:',
        }
    },
    computed: {
        userName() {   //当路由参数发生改变时，更新数据，这是因为同一个组件之间切换不会销毁重建，钩子函数不再执行了
            return this.$route.params.id
        }
    },
    beforeRouteUpdate(to,from,next){       //跟watch一样的用法
        console.log(to)
        console.log(from)
        if(to.fullPath!=from.fullPath){
            next()
            // this.changeUser()
        }
    },
    watch: {
        '$route'(to,from) {      //两个路由渲染同一个组件，不是销毁组件重建，而是重复利用，所以，生命钩子不会再次调用，所以使用watch监听是否发生改变
            // console.log(to)        //可以在这里根据不同的id获取不同的数据等相关操作，如果是获取id可以使用computed
            // console.log(from);
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
