<template>
  <section class="statistics">
    <header>
      <h1>Awesome statistics</h1>
      <h2>All statistics in on place!</h2>
    </header>
    <article class="victories">
      <p><strong>Game victories %</strong></p>
      <section class="player">
        <p>Player 1</p>
        <div>
          <span class="percent">39%</span>
          <span class="label">V</span>
        </div>
         <div>
          <span class="percent">61%</span>
          <span class="label">L</span>
        </div>
      </section>
      <section class="player">
        <p>Player 2</p>
        <div>
          <span class="percent">61%</span>
          <span class="label">V</span>
        </div>
         <div>
          <span class="percent">39%</span>
          <span class="label">L</span>
        </div>
      </section>
    </article>
    <article class="matchs">
      <p><strong>Played matchs</strong></p>
      <div class="match__circles">
        <span class="match__circle" v-for="index in 9" :key="index"></span>
      </div>
    </article>
    <article class="history">
      <p><strong>Game history</strong></p>
      <div class="history__squares">
         <span class="history__square" v-for="index in 9" :key="index"></span>
      </div>
    </article>
    <article class="time">
      <p><strong>Total time</strong></p>
      <p>00:44:12</p>
    </article>
  </section>
</template>

<script src='./statistics.component.ts' lang='ts'></script>

<style src='./statistics.component.scss' lang='scss'></style>
