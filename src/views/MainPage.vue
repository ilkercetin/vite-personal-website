<template lang="">
  <div>
    <AHeader></AHeader>
    <AboutMe></AboutMe>
    <MySocials></MySocials>
    <MyQualifications></MyQualifications>
    <MyProjects></MyProjects>
  </div>
</template>
<script lang="ts">
import AHeader from '../components/AHeader.vue';
import AboutMe from '../components/AboutMe.vue';
import MySocials from '../components/MySocials.vue';
import MyQualifications from '../components/MyQualifications.vue';
import MyProjects from '../components/MyProjects.vue';

export default {
  components: {
    AHeader,
    AboutMe,
    MySocials,
    MyQualifications,
    MyProjects,
  },
};
</script>
<style lang=""></style>
