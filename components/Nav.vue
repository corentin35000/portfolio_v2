<template>
  <nav>
    <div class="container1">
      <img src="/assets/images/logoo.png"  alt="" width="54" height="54" />
      <p id="nameEntreprise">DEV-ALL</p>
    </div>

    <div>
      <ul id="menu">
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">Work</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
      </ul>
      <img id="menuImage" @click="openMenu = !openMenu" src="/assets/images/menu.svg" alt="" />
    </div>
  </nav>

  <div id="menuOpen" v-if="openMenu">
    <ul>
      <li>
        <a href="">Home</a>
      </li>
      <li>
        <a href="">Work</a>
      </li>
      <li>
        <a href="">Contact</a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
  export default {
    components: true,
    data() {
      return {
        openMenu: false
      }
    },
  }
</script>

<style lang="scss" scoped>
  #menuImage {
    cursor: pointer;
  };

  #menu li a {
    color: white;
    text-decoration: none;
  }
  #menu li a:hover {
    cursor: pointer;
  }

  #menuOpen {
    background-color: #323232;
    text-align: center;
    font-size: 18px;

    ul {
      display: flex;
      flex-direction: column;
      li {
        padding: 10px 0;
        color: white;
        border-top: 1px solid #696969;
        a {
          text-decoration: none;
          color: white;
        }
      }
    }
  }

  #menuOpen ul li:hover {
    cursor: pointer;
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
    #menuOpen {
      display: none;
    }
  }

  @media (min-width: 950px) {

  }
</style>