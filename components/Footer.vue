<template>
  <footer>
    <div>
      <img src="/assets/images/Group.png" alt="" />
      <img src="/assets/images/Group.png" alt="" />
      <img src="/assets/images/Group.png" alt="" />
    </div>

    <p>DEV-ALL — Copyright 2022</p>
  </footer>
</template>

<script lang="ts">
  export default {
    components: true
  }
</script>

<style lang="scss" scoped>
  footer {
    background-color: #202020;
    width: 100%;
    text-align: center;
    padding: 50px 0;
    border-top: 1px solid #696969;
  }

  footer div > img {
    margin: 0 15px;
  }

  footer p {
    font-size: 16px;
    color: #959595;
    margin-top: 30px;
  }

  @media (min-width: 950px) {
    footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 50px 100px;
    }

    footer p {
      margin-top: 0;
    }
  }
</style>
