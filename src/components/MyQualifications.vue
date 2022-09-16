<template>
  <div class="q-pa-md">
    <div class="section-title">Qualifications</div>
    <br />
    <q-carousel
      v-model="slide"
      swipeable
      infinite
      animated
      :autoplay="3000"
      :navigation-position="navPos"
      navigation
      title="Qualifications"
      padding
      height="300px"
      class="slider-wrapper text-white rounded-borders"
    >
      <q-carousel-slide
        v-for="(qualification, index) in qualifications"
        :key="index"
        :name="index"
        class="column no-wrap flex-center"
      >
        <q-icon :size="'100px'" :style="{ color: qualification.colorHex }">
          <i :class="qualification.iconClass"></i>
        </q-icon>
        <div class="q-mt-md text-center text-h3">
          {{ qualification.name }}
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';

export default {
  name: 'MyQualifications',
  setup() {
    return {
      qualifications: [
        {
          name: 'Vue.js',
          description: '',
          iconClass: 'fa-brands fa-vuejs',
          colorHex: '#42b883',
        },
        {
          name: 'React',
          description: '',
          iconClass: 'fa-brands fa-react',
          colorHex: '#61DBFB',
        },
        {
          name: 'Javascript',
          description: '',
          iconClass: 'fa-brands fa-square-js',
          colorHex: '#F0DB4F',
        },
        {
          name: 'HTML',
          description: '',
          iconClass: 'fa-brands fa-html5',
          colorHex: '#ec6231',
        },
        {
          name: 'CSS',
          description: '',
          iconClass: 'fa-brands fa-css3-alt',
          colorHex: '#2965f1',
        },
      ],
      navPos: ref('bottom'),

      slide: ref(0),
    };
  },
};
</script>

<style lang="scss" scoped>
.slider-wrapper {
  background: linear-gradient(
    90deg,
    var(--q-primary) 0%,
    var(--q-secondary) 100%
  );
}
</style>
