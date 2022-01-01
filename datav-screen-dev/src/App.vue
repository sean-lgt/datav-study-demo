<template>
    <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>|
    <router-link to="/test">Test</router-link>
  </div> -->
    <router-view />
</template>

<style lang="scss">
html,
body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
}

#app {
    width: 100%;
    height: 100%;
    font-family: "Microsoft Yahei", Arial, sans-serif;
    overflow: hidden;
}
</style>
