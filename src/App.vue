<template>
  <Header />
  <Profile />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

// Components
import Header from './components/Header/header.component.vue';

// Views
import Profile from './views/Profile/profile.component.vue';

@Options({
  components: {
    Header,
    Profile,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
 @import './assets/styles/global.scss';
</style>
