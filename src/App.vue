<template>
  <div id="app">
    <NavHeader style="position: fixed; z-index: 1;background-color: #e1e1e1;width: 100%"
               :style="invertTop" v-on:getHighHeader="getHighHeader">
      <!--จะเห็นว่าตัวรับ v-on ชื่อเหมือนกันเปะๆ-->
    </NavHeader>
    <div :style="marginTop"></div>
    <BannerSlide  ref="BannerSlide"></BannerSlide>
    <transition name="fade">
      <router-view/>
    </transition>
    <NavFooter></NavFooter>
  </div>
</template>

<script>

export default {
  name: 'App', //  ไม่รู้ทำไมแต่ว่าต้อง import รูปเข้ามาแบบนี้ถึงจะใช้ได้
  data() {
    return {
      marginTop: {
        'margin-top': '0px',
      },
      invertTop: {
        'margin-top': '0px',
      },
    };
  },
  methods: {
    getHighHeader(marginTop) {
      this.marginTop['margin-top'] = `${marginTop}px`;
      // console.log(this.marginTop); ทำการโยงดึงค่าที่ส่งมาจาก emit children แล้วเซ็ท margin
      this.invertTop['margin-top'] = `-${this.marginTop['margin-top']}`;
      // console.log(this.invertTop); NavHeader มันขยับมาด้วยเราเลยต้องดึงมันกลับขึ้นไปเลยทำให้ติดลบ
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

.fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: .25s;
}

.fade-enter-active {
  transition-delay: .25s;
}

.fade-enter, .fade-leave-active {
  opacity: 0
}

</style>
