<template>
  <div id="navBar">
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
  </div>
</template>

<script>
export default {
  name: 'nav-header',
  methods: {
    test() {
    },
  },
};
</script>

<style scoped>

</style>
