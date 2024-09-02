<template>
  <div class="app">
    <NuxtPwaManifest />
    <NuxtPage />
    <!-- <NuxtRouteAnnouncer />
    <NuxtWelcome /> -->
  </div>
</template>

<style lang="scss">
@import url(assets/styles/default.scss);
html {
  font-size: 13.33333333vw;
}

@media (min-width: 560px) {
  html {
    font-size: 74.66666666666667px;
  }
}

body {
  font-size: 16px;
}
</style>
