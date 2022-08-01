<template>
  <div class="layout-default">
    <header class="h-20 static top-0">
      <div class="h-full mx-4 flex justify-center content-center">
        <div class="w-12 h-12 ml-auto border rounded">
          <fa-icon class="w-full h-full text-white" icon="circle-user" />
        </div>
      </div>
    </header>

    <Nuxt />

    <footer class="w-screen px-4 absolute bottom-0 flex justify-end">
      <a class="" href="#">Created by Edixon</a>
    </footer>
  </div>
</template>

<style>
* {
  outline: 1px solid green !important;
}

.layout-default header {
  background: #212d36;
}
</style>
