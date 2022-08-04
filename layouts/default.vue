<template>
  <div class="layout-default">
    <header class="h-20 static top-0 bg-main-200">
      <div class="h-full mx-4 flex items-center justify-between">
        <fa-icon class="cursor-pointer text-4xl text-white" icon="circle-left" @click="$router.go(-1)" />

        <h2 class="text-4xl text-white" :class="{ '-mr-60': section === 'Home' }" v-text="section"></h2>

        <div class="w-11 h-11">
          <fa-icon class="w-full h-full text-white cursor-pointer" icon="circle-user" />
        </div>
      </div>
    </header>

    <Nuxt />

    <footer class="h-8 w-full p-4 relative bottom-0 flex items-center justify-end bg-main-100">
      <a class="flex items-center text-main-200 font-bold" href="https://github.com/EdixonAlberto">
        <fa-icon class="mr-1 text-2xl" :icon="['fab', 'github']" />
        Created by Edixon
      </a>
    </footer>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      section: 'states/getSection'
    })
  }
}
</script>

<style>
* {
  /* outline: 1px solid green !important; */
}
</style>
