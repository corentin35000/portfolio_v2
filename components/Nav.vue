<template>
  <nav>
    <button>LOGO</button>

    <ul>
      <li>A propos de moi</li>
      <li>Compétences</li>
      <li>Portfolio</li>
    </ul>

    <button>CONTACT</button>
  </nav>
</template>

<script lang="ts">

</script>

<style lang="scss" scoped>
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    ul {
      display: flex;
      li {
        margin: 0 60px;
      }
    }
  }
</style>