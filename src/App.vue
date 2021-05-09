<template>
  <Header />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

import Header from './components/Header/header.component.vue';

@Options({
  components: {
    Header,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
 @import './assets/styles/global.scss';
</style>
