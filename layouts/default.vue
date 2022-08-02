<template>
  <div class="layout-default">
    <header class="h-20 static top-0 bg-main-200">
      <div class="h-full mx-4 flex items-center justify-center">
        <div class="w-11 h-11 ml-auto">
          <fa-icon class="w-full h-full text-white" icon="circle-user" />
        </div>
      </div>
    </header>

    <Nuxt />

    <footer class="h-8 w-full p-4 relative bottom-0 flex items-center justify-end bg-main-100">
      <a class="text-main-200 font-bold" href="https://github.com/EdixonAlberto">Created by Edixon</a>
    </footer>
  </div>
</template>

<style>
* {
  /* outline: 1px solid green !important; */
}
</style>
