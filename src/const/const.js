export default {
    install(Vue,option) {
        Vue.prototype.global = {
            title: '全局',
            isBack: true,
            isAdd: false
        }
    }
}