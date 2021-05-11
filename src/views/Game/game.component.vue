<template>
  <main>
    <Profile :profile="playerProfile" />
    <Board
      :gameData="gameData"
      @gameStarted="handleGameStarted"
      @gameType="setGameType"
      @gameResult="handleGameResult"
    />
    <Statistics :gameData="gameData" ref="statistics" />
  </main>
</template>

<script src="./game.component.ts" lang="ts"></script>

<style src="./game.component.scss" lang="scss" scoped></style>
