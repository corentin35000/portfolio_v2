<template>
  <main>
    <div class="container2">
      <img src="/assets/images/arrow.png" alt="" />
      <p>Featured Work</p>
    </div>

    <div class="container3">
      <img data-aos="zoom-out" src="/assets/images/project1.png" alt="" width="366" height="600" />
      <img data-aos="zoom-out" src="/assets/images/project2.png" alt="" width="366" height="600" />
      <img data-aos="zoom-out" src="/assets/images/project3.png" alt="" width="366" height="600" />
      <img data-aos="zoom-out" src="/assets/images/project4.png" alt="" width="366" height="600" />
    </div>

    <div class="container">
      <p id="contactMe">Contact Me</p>
      <p id="paragraph">
        If you are looking to hire <br />
        a product designer, I’m currently <br />
        available for freelance work
      </p>
      <div id="buttonEmail">
        <img src="/assets/images/Group.png" alt="" />
        <a href="mailto:shoutteur@hotmail.fr">yrdy@hotmail.com</a>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import AOS from 'aos'
import 'aos/dist/aos.css'

  export default {
    setup() {
      useHead({
        title: 'Portfolio',
      })
    },
    mounted() {
      AOS.init({ })
    }
  }
</script>

<style lang="scss" scoped>
  main {
    padding: 100px 0;
  }

  .container3 {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 10px;
  }

  .container3 img {
    padding-bottom: 30px;
  }

  .container2 {
    display: flex;
    margin-left: 40px;
  }

  .container2 p {
    font-size: 18px;
    color: #DEDEDE;
    margin-left: 20px;
  }

  .container {
    margin-top: 130px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  #contactMe {
    font-size: 28px;
    text-align: center;
    color: #DEDEDE;
  }

  #paragraph {
    font-size: 18px;
    text-align: center;
    color: #959595;
    margin-top: 25px;
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

  @media (min-width: 850px) {
    .container3 {
      justify-content: space-around;
      flex-direction: row;
      flex-wrap: wrap;
    }
  }
</style>
