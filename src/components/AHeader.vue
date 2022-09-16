<template>
  <q-toolbar class="text-primary bg-primary-gradient shadow-10">
    <q-icon :color="'white'" :size="'30px'">
      <i class="fa-solid fa-laptop-code"></i>
    </q-icon>
    <q-toolbar-title class="text-white"> İlker Çetin </q-toolbar-title>
  </q-toolbar>
</template>

<script lang="ts">
export default {
  name: 'AHeader',
};
</script>

<style scoped lang="scss">
.q-toolbar {
  position: sticky;
  top: 0;
  left: 0;
  z-index: 10;
}
</style>
