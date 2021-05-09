<template>
  <section class="board">
    <h1>Tic tac toe games</h1>
    <h2>Welcome to the best game in the world.</h2>
    <article class="game__type">
      <p>
        <span
          :class="getGameType() === 1 ? 'selected' : ''"
          @click="setGameType(1)"
        >Tic tac toe</span>
        <span
          :class="getGameType() === 2 ? 'selected' : ''"
          @click="setGameType(2)"
        >4-in-a-row</span>
      </p>
    </article>
    <article class="game__statistics">
      <section class="player">
        <p>{{ gameData.firstPlayer.name }}</p>
        <p>{{ gameData.firstPlayer.wins }}</p>
      </section>
      <section class="timer">00:00:00</section>
      <section class="player">
        <p>{{ gameData.secondPlayer.name }}</p>
        <p>{{ gameData.secondPlayer.wins }}</p>
      </section>
    </article>
  </section>
</template>

<script src="./board.component.ts" lang="ts"></script>

<style src="./board.component.scss" lang="scss" scoped></style>
