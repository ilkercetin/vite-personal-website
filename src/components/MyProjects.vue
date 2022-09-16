<template lang="">
  <div class="social-wrapper text-center q-pa-md">
    <span class="section-title">My Personal Projects</span>
    <div class="bg-primary-gradient b-r-5 carousel-wrapper">
      <q-carousel
        v-model="slide"
        transition-prev="slide-right"
        transition-next="slide-left"
        animated
        control-color="primary"
        class="rounded-borders bg-transparent"
      >
        <q-carousel-slide
          v-for="(project, index) in projectList"
          :key="index"
          :name="project.value"
          class="text-white flex flex-center justify-center f-c f-n-w"
        >
          <a
            :href="project.redirect"
            target="_blank"
            class="text-white td-none project-box"
          >
            <q-img
              :src="project.img"
              :alt="project.value"
              :width="'300px'"
              :height="'200px'"
              spinner-color="white"
            />
            <h4 class="m-1-r">{{ project.value }}</h4>
          </a>
          <a
            :href="project.githubLink"
            target="_blank"
            class="td-none text-white"
          >
            <q-icon :size="'50px'"
              ><i class="fa-brands fa-square-github"></i></q-icon
          ></a>
          <h5 class="m-1-r">developed with: {{ project.developedWith }}</h5>
        </q-carousel-slide>
      </q-carousel>

      <div class="row justify-center">
        <q-btn-toggle
          v-model="slide"
          :options="projectList"
          :text-color="'primary'"
          color="white"
        />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { ref } from 'vue';

export default {
  name: 'MyProjects',
  setup() {
    return {
      projectList: [
        {
          value: 'Movie Database',
          developedWith: 'Vue.js',
          redirect: 'https://movie-database-ilkercetin.netlify.app/',
          img: 'https://screenshot-proxy.netlify.app/f_avif,w_204/https://d33wubrfki0l68.cloudfront.net/62e93989413e71171517a708/screenshot_2022-08-02-14-50-08-0000.png',
          label: 1,
          githubLink: 'https://github.com/ilkercetin/movie-listing',
        },
        {
          value: 'Memory Game',
          developedWith: 'React',
          redirect: 'https://ilkercetin-memory-game.netlify.app/',
          img: 'https://screenshot-proxy.netlify.app/f_avif,w_204/https://d33wubrfki0l68.cloudfront.net/61f7d566d0420a0008fde844/screenshot_2022-01-31-12-27-13-0000.png',
          label: 2,
          githubLink: 'https://github.com/ilkercetin/memory-game',
        },
        {
          value: 'Color Picker',
          developedWith: 'React',
          redirect: 'https://ilkercetin-color-picker.netlify.app/',
          img: 'https://screenshot-proxy.netlify.app/f_avif,w_204/https://d33wubrfki0l68.cloudfront.net/626ef90832c87800088ad7f0/screenshot_2022-05-01-21-18-48-0000.png',
          label: 3,
          githubLink: 'https://github.com/ilkercetin/color-picker',
        },
        {
          value: 'Todo App',
          developedWith: 'React',
          redirect: 'https://ilkercetin-color-picker.netlify.app/',
          img: 'https://screenshot-proxy.netlify.app/f_avif,w_204/https://d33wubrfki0l68.cloudfront.net/61f805776579000007e96651/screenshot_2022-01-31-15-51-55-0000.png',
          label: 4,
          githubLink: 'https://github.com/ilkercetin/to-do-app',
        },
        {
          value: 'Recommender Page',
          developedWith: 'Vanilla JS',
          redirect: 'https://recommender-page.netlify.app/',
          img: 'https://screenshot-proxy.netlify.app/f_avif,w_204/https://d33wubrfki0l68.cloudfront.net/62e80eda3455f500081a32d1/screenshot_2022-08-01-17-35-30-0000.png',
          label: 5,
          githubLink: 'https://github.com/ilkercetin/product-recommender-page',
        },
      ],
      slide: ref('Movie Database'),
    };
  },
};
</script>
<style lang="scss" scoped>
.social-wrapper {
  padding-top: 0;

  .carousel-wrapper {
    margin-top: 16px;

    .project-box {
      .q-img {
        transition: scale 0.3s ease;

        &:hover {
          scale: 1.1;
        }
      }
    }
  }
}
</style>
