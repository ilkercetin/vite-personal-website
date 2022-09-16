<template>
  <div class="q-pa-md q-gutter-md">
    <div class="row justify-between">
      <q-parallax src="../assets/coding_background.jpg" :height="650">
        <div class="column items-center">
          <q-avatar class="opacity-5" :size="'10rem'">
            <img src="../assets/profile_photo.png" />
          </q-avatar>
          <br />
          <div class="text-h3 text-white text-center">İlker Çetin</div>
          <div class="role-wrapper">
            <div class="role-line"></div>
            <h5 class="text-white text-center">Frontend Developer</h5>
            <div class="role-line"></div>
          </div>
          <br />
          <p class="personal-description text-h6 text-center text-white">
            <VueWriter
              :array="arr"
              :typeSpeed="30"
              :eraseSpeed="10"
              :delay="1000"
              :caret="underscore"
            />
          </p>
        </div>
      </q-parallax>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: 'AboutMe',
  components: {},
  setup() {
    return {
      arr: [
        'Welcome to my website.',
        'My name is İlker Çetin.',
        'I am a Frontend Developer at Insider.',
        'I graduated from Computer engineering and Electrical & Electronic Engineering departments from Istanbul Bilgi University.',
      ],
    };
  },
};
</script>
<style lang="scss">
.q-parallax {
  border-radius: 5px;

  .q-parallax__media {
    &::after {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      display: inline-block;
      background: linear-gradient(
        90deg,
        var(--q-primary) 0%,
        var(--q-secondary) 100%
      );
      opacity: 0.96;
    }
  }

  .q-avatar {
    transition: scale 0.3s ease-in;

    &:hover {
      scale: 1.2;
    }
  }

  .role-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;

    .role-line {
      width: 70px;
      height: 5px;
      background-color: white;
      margin: 0 10px;
      border-radius: 5px;
    }
  }

  .personal-description {
    padding: 0 1rem;
    position: absolute;
    top: 75%;
    max-width: 500px;

    .is-typed span.cursor {
      display: inline-block;
      width: 2px;
      background-color: white;
      animation: blink 1s infinite;
    }

    .is-typed span.cursor.typing {
      animation: none;
    }

    @keyframes blink {
      49% {
        background-color: white;
      }
      50% {
        background-color: transparent;
      }
      99% {
        background-color: transparent;
      }
    }
  }
}
</style>
