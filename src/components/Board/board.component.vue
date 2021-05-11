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
    <article class="game__area">
      <section class="game__board" :class="gameClass">
        <div
          class="game__square"
          v-for="index in gameSize"
          :key="index"
          @click="registerMove(index - 1)">
          <img :src="getPlayerImage(index - 1)" alt="" srcset="">
        </div>
      </section>
      <button
        class="btn"
        type="button"
        :class="gameStarted ? 'started' : 'stopped'"
        @click="setGame()"
      >
        {{ gameStarted ? 'Stop' : 'Start' }} Game
      </button>
    </article>
    <article class="game__statistics">
      <section class="player">
        <p :class="playerOnTurn === 1 ? 'on__turn' : ''">{{ gameData.firstPlayer.name }}</p>
        <p>{{ gameData.firstPlayer.wins }}</p>
      </section>
      <section class="game">
        <p class="timer">{{ totalTime }}</p>
        <p class="games__played">{{ gamesPlayed }}</p>
      </section>
      <section class="player">
        <p :class="playerOnTurn === 2 ? 'on__turn' : ''">{{ gameData.secondPlayer.name }}</p>
        <p>{{ gameData.secondPlayer.wins }}</p>
      </section>
    </article>
  </section>
</template>

<script src="./board.component.ts" lang="ts"></script>

<style src="./board.component.scss" lang="scss" scoped></style>
