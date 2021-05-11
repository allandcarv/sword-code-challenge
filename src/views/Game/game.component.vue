<template>
  <main>
    <Profile :profile="playerProfile" />
    <Board
      :gameData="gameData"
      @gameType="setGameType"
      @winner="setGameWinner"
    />
    <Statistics :gameData="gameData" ref="statistics" />
  </main>
</template>

<script src="./game.component.ts" lang="ts"></script>

<style src="./game.component.scss" lang="scss" scoped></style>
