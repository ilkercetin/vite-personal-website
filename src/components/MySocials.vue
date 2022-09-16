<template lang="">
  <div class="social-wrapper text-center q-pa-md">
    <span class="section-title">My Socials</span>
    <div class="bg-primary-gradient b-r-5">
      <div class="social-icons">
        <q-icon
          v-for="(social, index) in socialMediaList"
          :key="index"
          :size="'100px'"
        >
          <a :href="social.redirect" target="_blank"
            ><i :class="social.iconClass" class="social-media-icon"></i
          ></a>
        </q-icon>
      </div>
      <h4 class="text-white m-1-r">Contact Me via Email</h4>
      <a :href="'mailto:' + email" class="td-none text-white"
        ><q-icon :size="'100px'" color="white"
          ><i class="fa-regular fa-envelope"></i
        ></q-icon>
        <h5 class="m-1-r">{{ email }}</h5></a
      >
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: 'MySocials',
  setup() {
    return {
      email: '97ilkercetin@gmail.com',
      socialMediaList: [
        {
          name: 'Github',
          iconClass: 'fa-brands fa-square-github',
          redirect: 'https://github.com/ilkercetin',
        },
        {
          name: 'Linkedin',
          iconClass: 'fa-brands fa-linkedin',
          redirect: 'https://www.linkedin.com/in/ilker-ctn/',
        },
        {
          name: 'Instagram',
          iconClass: 'fa-brands fa-square-instagram',
          redirect: 'https://www.instagram.com/ilker.cetinn/',
        },
        {
          name: 'Twitter',
          iconClass: 'fa-brands fa-square-twitter',
          redirect: 'https://twitter.com/iilkercetinn',
        },
        {
          name: 'Facebook',
          iconClass: 'fa-brands fa-square-facebook',
          redirect: 'https://www.facebook.com/ilkercetinn/',
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.social-wrapper {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-top: 0 !important;

  .social-icons {
    width: 100%;
    border-radius: 5px;
    padding: 10px 0;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;

    .social-media-icon {
      cursor: pointer;
      color: white;
    }
  }
}
</style>
