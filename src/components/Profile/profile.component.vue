<template>
  <section class="profile">
    <article class='main__info'>
      <img :src="profile.photoImage" alt="Profile Picture">
      <section>
        <p class="name">{{ profile.playerName }}</p>
        <p class="age">Age: {{ profile.playerAge }}</p>
        <p class="location">Location: {{ profile.playerLocation }}</p>
        <p class="occupation">Occupation: {{ profile.playerOccupation }}</p>
      </section>
    </article>
    <article class="about__me">
      <p>About me:</p>
      <p>{{ profile.playerAboutMe}}</p>
    </article>
  </section>
</template>

<script src="./profile.component.ts" lang="ts"></script>

<style src="./profile.component.scss" lang="scss" scoped></style>
