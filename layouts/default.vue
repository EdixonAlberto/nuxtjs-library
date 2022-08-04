<template>
  <div class="layout-default max-h-auto min-h-screen relative">
    <header class="h-20 w-full sticky top-0 bg-main-200">
      <div class="h-full mx-4 flex items-center justify-between">
        <fa-icon
          class="cursor-pointer h-9 w-9 text-white"
          :class="{ invisible: section === 'Home' }"
          icon="circle-left"
          @click="$router.go(-1)"
        />
        <h2 class="text-4xl font-medium text-white" :class="{ '-mr-60': section === 'Home' }" v-text="section"></h2>
        <fa-icon class="w-9 h-9 text-white" icon="circle-user" />
      </div>
    </header>

    <Nuxt />

    <footer class="h-8 w-full p-4 absolute bottom-0 flex items-center justify-end bg-main-100">
      <a class="flex items-center text-main-200 font-bold" href="https://github.com/EdixonAlberto/nuxtjs-library">
        <fa-icon class="mr-1 h-6 w-6 text-main-200" :icon="['fab', 'github']" />
        Created by Edixon 🍍
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
  /* uncomment to layout */
  /* outline: 1px solid green !important; */
}
</style>
