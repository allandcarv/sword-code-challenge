<template>
  <Header />
  <Game />
  <Footer />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

// Components
import Footer from './components/Footer/footer.component.vue';
import Header from './components/Header/header.component.vue';

// Views
import Game from './views/Game/game.component.vue';

@Options({
  components: {
    Footer,
    Header,
    Game,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
 @import './assets/styles/global.scss';
</style>
