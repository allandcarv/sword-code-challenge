<template>
  <footer>
    <section class="about">
      <h1>About Page</h1>
      <p>Play tic tac toe or 4-in-a-row anytime!</p>
      <p>Created by <a href="https://www.linkedin.com/in/allandc/" title="LinkedIn Allan Carvalho" target="_blank" rel="noopener noreferrer">Allan Carvalho</a></p>
    </section>

    <section class="contacts">
      <h1>Contacts</h1>
      <p><a href="tel:+351123456789">(+351) 123 456 789</a></p>
      <p>Rua Sá da Bandeira, 111, Porto</p>
    </section>

    <section class="in__touch">
      <h1>Stay in touch</h1>
      <article class="social__medias">
        <a href="https://www.facebook.com/SWORDHealth1/" title="SWORD Health Facebook" target="_blank" rel="noopener noreferrer">
          <img src="@/assets/images/facebook.svg" alt="Facebook Icon">
        </a>
        <a href="https://twitter.com/swordhealth" title="SWORD Health Twitter" target="_blank" rel="noopener noreferrer">
         <img src="@/assets/images/twitter.svg" alt="Twitter Icon">
        </a>
        <a href="#" title="SWORD Health Instagram" target="_blank" rel="noopener noreferrer">
         <img src="@/assets/images/instagram.svg" alt="Instagram Icon">
        </a>
      </article>
       <article class="newsletter">
        <input type="email" placeholder="Subscribe our games" v-model="email">
        <button
          type="button"
          class="btn btn-primary"
          :disabled="!email.length"
          @click.prevent="handleSubmit">
          <img src="@/assets/images/send.svg" alt="Subscribe Newsletter">
        </button>
      </article>
    </section>
  </footer>
</template>

<script src='./footer.component.ts' lang="ts"></script>

<style src="./footer.component.scss" lang="scss" scoped></style>
