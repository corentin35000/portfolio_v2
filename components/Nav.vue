<template>
  <nav>
    <div class="container1">
      <img src="/assets/images/logoo.png"  alt="" width="54" height="54" />
      <p id="nameEntreprise">DEV-ALL</p>
    </div>

    <div>
      <ul id="menu">
        <li>Home</li>
        <li>Work</li>
        <li>Contact</li>
      </ul>
      <img id="menuImage" src="/assets/images/menu.svg"  alt="" />
    </div>

    <div id="menuOpen">

    </div>
  </nav>
</template>

<script lang="ts">
  export default {
    components: true,
    data() {
      return {
      }
    },
  }
</script>

<style lang="scss" scoped>
  #menuOpen {
    display: none;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
  }

  nav {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 72px;
    width: 100%;
    background-color: #323232;
    padding: 0 20px;

    .container1 {
      display: flex;
      align-items: center;

      #nameEntreprise {
        font-size: 16px;
        color: white;
        margin-left: 10px;
      }
    }

    ul {
      display: flex;
      margin-right: 30px;
      li {
        margin: 0 30px;
        color: white;
      }
    }
  }

  @media (max-width: 650px) {
    #menu {
      display: none;
    };
  }

  @media (min-width: 650px) {
    #menuImage {
      display: none;
    };
  }

  @media (min-width: 950px) {
    #menuOpen {
      display: unset;

    }
  }
</style>