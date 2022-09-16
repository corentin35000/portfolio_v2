<template>
  <header>
    <Nav />

    <div class="container">
      <img data-aos="flip-left" id="visage" src="/assets/images/header_visage.png" alt="" width="240" height="240" />

      <div class="col">
        <p id="name">Entreprise en développement informatique.</p>

        <p id="description">
          I help businesses and companies reach their goals by designing user-centric digital products & interactive experiences.
        </p>

        <div id="buttonEmail">
          <img src="/assets/images/Group.png" alt="" />
          <a href="mailto:shoutteur@hotmail.fr">yrdy@hotmail.com</a>
        </div>
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
    background-color: #202020;
    border-bottom: 1px solid #696969;
  }

  #name {
    color: #DEDEDE;
    max-width: 366px;
    text-align: center;
  }

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 50px 0;
  }

  .container {
    .col {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: 50px;
    }
  }

  #description {
    color: #959595;
    font-size: 18px;
    text-align: center;
    margin-top: 25px;
    max-width: 500px;
  }

  #buttonEmail {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 7px;
    background-color: #9D9D9D;
    width: 242px;
    height: 57px;
    margin-top: 25px;

    a {
      text-decoration: none;
      color: #FFFFFF;
    }
    a:active {
      color: #FFFFFF;
    }
  }

  @media (max-width: 650px) {
    #name {
      font-size: 34px;
    };
  }

  @media (min-width: 650px) {
    #name {
      font-size: 34px;
    };
  }

  @media (min-width: 950px) {
    .container {
      flex-direction: row-reverse;
    }

    #name {
      text-align: inherit;
    }

    #description {
      text-align: inherit;
    }

    .container {
      .col {
        align-items: flex-start;
      }
    }
  }
</style>