<template>
  <div id="app">
    <NavHeader style="position: fixed; z-index: 1;background-color: #e1e1e1;width: 100%">
    </NavHeader>
    <BannerSlide></BannerSlide>
    <router-view/>
    <NavFooter></NavFooter>
  </div>
</template>

<script>

export default {
  name: 'App', //  ไม่รู้ทำไมแต่ว่าต้อง import รูปเข้ามาแบบนี้ถึงจะใช้ได้
  methods: {
    test() {

    },
  },
};


</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
