<template>
  <div class="book h-full">
    <div class="card h-full flex justify-evenly items-center gap-20">
      <img src="" alt="cover book" />

      <div class="content">
        <h3>Title</h3>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo esse, minus voluptatum sapiente temporibus ea
          aspernatur dolore aperiam magni molestiae dicta? Delectus iste voluptas a, impedit aut eius aliquid, modi
          maiores perferendis quo beatae fuga pariatur dicta quibusdam iusto! Ullam expedita accusantium velit
          distinctio mollitia! Quia officia placeat quidem autem?
        </p>

        <div class="favorite">
          <fa-icon class="text-2xl" :icon="['far', 'heart']" />
          <span>Add to my list favorite</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['data'],

  created() {
    console.log(this.data)
  }
}
</script>

<style>
</style>
