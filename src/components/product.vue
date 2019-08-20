<template>
  <div>
    <h1>{{info}}</h1>
    <button @click="isshow =! isshow">点击领取</button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      info: '='
    }
  },
  //   指令
  methods: {
    isshow: true
  },
  // 侦听器
  watch: {
    //   console.log(this.$route)
    '$route' (to, from) {
      console.log(this.$route)
      let id = to.params.id
      if (id === '1') {
        this.info = '产品页'
      } else if (id === '2') {
        this.info = '手机页'
      } else if (id === '3') {
        this.info = '生活用品页'
      }
    }
  },
  // 钩子函数
  mounted () {
    console.log(this.$route)
    let id = this.$route.params.id
    if (id === '1') {
      this.info = '产品页'
    } else if (id === '2') {
      this.info = '手机页'
    } else if (id === '3') {
      this.info = '生活用品页'
    }
  }
}
</script>
<style lang="less" scoped>
</style>
