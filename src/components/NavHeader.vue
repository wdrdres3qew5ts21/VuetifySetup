<template>
  <div>
    <div ref="navBar">
    <v-toolbar>
      <v-toolbar-side-icon  @click="display = !display"></v-toolbar-side-icon>
      <v-toolbar-title>Gamer</v-toolbar-title>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat to="/" style="color: black">หน้าแรก</v-btn>
        <v-btn flat to="/News"  style="color: black">ข่าวสาร</v-btn>
        <v-btn flat to="/Tournament" style="color: black">ทัวร์นาเมนต์
        </v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
    </v-toolbar>
      {{mounted()}}
      <v-navigation-drawer permanent v-show="display">
        <v-toolbar flat>
          <v-list>
            <v-list-tile>
              <v-list-tile-title class="title">
                Application
              </v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-toolbar>
        <v-divider></v-divider>
        <v-list dense class="pt-0">
          <v-list-tile v-for="item in items" :key="item.title" >
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
    </div>
    {{sendValue()}}
  </div>
</template>

<script>
/* eslint-disable object-shorthand,no-trailing-spaces,func-names */

export default {
  name: 'nav-header',
  data() {
    return {
      display: false,
      items: [
        { title: 'Home', icon: 'dashboard' },
        { title: 'About', icon: 'question_answer' },
      ],
      right: null,
    };
  },
  methods: {
    mounted: function () {
      this.$nextTick(function test() {
        this.$emit('getHighHeader');
      });
    },
    sendValue: function () {
      this.$nextTick(() => { //  การยิงค่า this.$emit('v-onListener', value) ออกมานั้น
        //   จะเป็นชื่อของ v-on ที่รับอยู่ข้างนอกและตามด้วย parameter อีกตัวหนึ่งถ้าอยากส่งไป
        //  console.log('Arrow function!!! ' + this.$refs.navBar.clientHeight);
        this.$emit('getHighHeader', this.$refs.navBar.clientHeight);
      });
    },
  },
};
</script>

<style scoped>

</style>
