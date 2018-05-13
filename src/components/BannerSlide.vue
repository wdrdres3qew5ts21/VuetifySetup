<template>
  <div>
    <v-carousel>
      <v-carousel-item v-for="(item,i) in items" :src="item.src" :key="i"></v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>

export default {
  name: 'banner-slide',
  data() {
    return {
      items: [
        {
          src: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/clans/7038991/cfc1411b1509b4d0ea82558f6a13a32e2ca0fbe9.jpg',
        },
        {
          src: 'https://www.notebookcheck.net/fileadmin/Notebooks/Sonstiges/hpspectre13/pic1.jpg',
        },
        {
          src: 'https://content.halocdn.com/media/Default/home/media-galleries/hw2/final_blow_1920x1080-6b94018da51846998118c45e808e5952.jpg',
        },
        {
          src: 'https://www.hdwallpapers.in/download/geralt_the_witcher_3_wild_hunt-wide.jpg',
        },
        {
          src: 'http://steam.cryotank.net/wp-content/gallery/divinityos2/Divinity-OS-2-05-HD.png',
        },
      ],
    };
  },
};
</script>

<style scoped>

</style>
