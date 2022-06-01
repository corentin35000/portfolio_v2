<template>
  <header>
    <Nav />

    <div class="container">
      <div class="container1">
          <h1 id="name">RECANZONE CORENTIN</h1>
          <p>
            Développeur Full Stack (Web, Mobile, jeux vidéos et desktop).
          </p>
          <button id="btnContact">CONTACTER MOI</button>
      </div>

      <div class="container2">

      </div>
    </div>
  </header>
</template>

<script lang="ts">
  export default {
    components: true
  }
</script>

<style lang="scss" scoped>
  header {
    background-color: #28293e;
    color: white;
    padding: 28px 28px 0 28px;
  }

  .container {
    display: flex;
    margin-top: 88px;
  }

  #name {
    font-family: 'Epilogue';
    font-style: normal;
    font-weight: 800;
    font-size: 72px;
    line-height: 80px;
    letter-spacing: -2px;
  }

  #btnContact {
    background-color: #EF6D58;
    width: 154px;
    height: 48px;
    border-radius: 6px;
    color: white;
    text-align: center;
    font-weight: 900;
    font-size: 14px;
  }
</style>