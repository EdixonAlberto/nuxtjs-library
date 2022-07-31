<template>
  <div class="home flex content-between ">
    <aside class="w-60 relative top-0 left-0 pt-16 transition delay-500">
      <h3 class="text-3xl text-gray-100">Library</h3>

      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
      </ul>
    </aside>

    <h1>Home</h1>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
aside {
  height: calc(100vh - 80px);
  padding: 20px;

  background-image: url('/images/libraries.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: lef;
  color: #fff;

  z-index: 1;
}

aside::after {
  content: '';
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: -1;
}
</style>
