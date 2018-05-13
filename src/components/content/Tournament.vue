<template>
  <div style="width: 100%;height: 500px" transition="slide-x-transition">
    <div id="epicDiv" >

    </div>
  </div>
</template>

<script>
export default {
  name: 'tournament',
};
</script>

<style scoped>
  #epicDiv {
    margin-top: 10%;
    width: 200%;
    height: 70%;
    -ms-transform: rotate(5deg); /* IE 9 */
    -webkit-transform: rotate(5deg); /* Safari */
    transform: rotate(5deg);
    background: linear-gradient(to right, palevioletred , darkslateblue);
    position: absolute;
    z-index: -10;
    display: flex;
  }
</style>
