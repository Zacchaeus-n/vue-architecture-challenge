<template>
  <base-layout>
    <template #image>
      <img src="../assets/images/img1.png" alt="left image" />
    </template>
    <template #content>
      <img src="../assets/images/img2.png" alt="left image" />
    </template>
  </base-layout>
</template>

<script>
import BaseLayout from "@/components/BaseLayout.vue";
export default {
  components: { BaseLayout },
};
</script>

<style>
img {
  object-fit: cover;
}
</style>
