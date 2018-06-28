<template>
    <div id="app">
        <div id="cover"></div>
        <Header></Header>
      <router-link to="/app">app</router-link>
      <router-link to="/login">login</router-link>
      <transition name="fade">
        <router-view />
      </transition>
        <Footer></Footer>
      <router-view name="a"/>
    </div>
</template>

<script>
    import Header from './layout/header.vue'
    import Footer from './layout/footer.jsx'

    console.log(Header.__docs)
    export default{
      data () {
        return {
          text: 'abcde2'
        }
      },
      components: {
        Header,
        Footer
      }
    }
</script>

<style lang="stylus" scoped>
    #app{
        position absolute
        left 0
        right 0
        top 0
        bottom 0
    }
    #cover{
        position absolute
        left 0
        top 0
        right 0
        bottom 0
        background-color #999
        opacity .9
        z-index -1
    }
</style>
