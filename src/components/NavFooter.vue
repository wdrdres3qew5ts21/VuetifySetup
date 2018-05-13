<template>
  <v-footer class="pa-3">
    <v-spacer></v-spacer>
    <v-container grid-list-md text-xs-center>
      <v-layout row wrap>
        <v-flex  xs3 >
          <v-card dark color="primary">
            <img src="../assets/Bangmod.png" alt="bangmod" class="img-width">
          </v-card>
        </v-flex>
        <v-flex  xs3>
          <v-card dark color="primary">
            <img src="../assets/NEX.png" alt="NEX" class="img-width">
          </v-card>
        </v-flex>
        <v-flex  xs3>
          <v-card dark color="primary">
            <img src="../assets/Olufy.png" alt="Olufy" class="img-width">
          </v-card>
        </v-flex>
        <v-flex  xs3>
          <v-card dark color="primary">
            <img src="../assets/Signature.png" alt="Signature" class="img-width">
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <v-spacer></v-spacer>
  </v-footer>
</template>
<script>
export default {
  name: 'nav-footer',
};
</script>

<style scoped>
  .img-width {
    width : 150px;
  }
</style>
