<template>
  <div class="base-layout">
    <div class="layout-image">
      <slot name="image"></slot>
    </div>
    <div class="layout-content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.base-layout {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  align-content: center;
  width: 100%;
  height: 100%;
}

.layout-image {
  flex: 0.5;
  width: 100%;
  height: 100%;
  background-color: aqua;
  /* center children */
  display: flex;
  justify-content: center;
  align-content: center;
}

.layout-content {
  flex: 0.5;
  width: 100%;
  height: 100%;
  /* padding: 4rem; */
  background-color: rgb(88, 103, 103);
  /* center children */
  display: flex;
  justify-content: center;
  align-content: center;
}
</style>
