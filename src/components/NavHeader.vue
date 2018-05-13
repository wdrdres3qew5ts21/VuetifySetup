<template>
  <div>
    <div ref="navBar">
    <v-toolbar>
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title>Gamer</v-toolbar-title>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat>หน้าแรก</v-btn>
        <v-btn flat>ข่าวสาร</v-btn>
        <v-btn flat>ทัวร์นาเมนต์</v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
    </v-toolbar>
      {{mounted()}}
    </div>
  </div>
</template>

<script>
/* eslint-disable object-shorthand,no-trailing-spaces,func-names */

export default {
  name: 'nav-header',
  methods: {
    mounted: function () {
      this.$nextTick(function test() {
        this.$emit('getHighHeader');
      });
    },
  },
};
</script>

<style scoped>

</style>
