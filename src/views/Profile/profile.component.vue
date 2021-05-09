<template>
  <section class="profile">
    <article class='main__info'>
      <img :src="photoImage" alt="Profile Picture">
      <section>
        <p class="name">{{ playerName }}</p>
        <p class="age">Age: {{ playerAge }}</p>
        <p class="location">Location: {{ playerLocation }}</p>
        <p class="occupation">Occupation: {{ playerOccupation }}</p>
      </section>
    </article>
    <article class="about__me">
      <p>About me:</p>
      <p>{{ playerAboutMe}}</p>
    </article>
  </section>
</template>

<script src="./profile.component.ts" lang="ts"></script>

<style src="./profile.component.scss" lang="scss" scoped></style>
