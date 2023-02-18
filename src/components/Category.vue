<script setup>
import category1 from "/images/category/category1-img.webp";
import category2 from "/images/category/category2-img.webp";
import category3 from "/images/category/category3-img.webp";
const categories = [
  {
    title: "Ghost",
    img: category1,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id id consequat, eu faucibus nulla. Ultrices mattis lacus, sed maecenas nascetur.",
  },
  {
    title: "Witch",
    img: category2,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id id consequat, eu faucibus nulla. Ultrices mattis lacus, sed maecenas nascetur.",
  },
  {
    title: "Pumpkin",
    img: category3,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id id consequat, eu faucibus nulla. Ultrices mattis lacus, sed maecenas nascetur.",
  },
];
</script>
<template>
  <section id="category" class="flex flex-col items-center py-32">
    <h2 class="my-10 text-5xl md:text-6xl font-bold text-white">Category</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 place-items-center">
      <div
        v-for="category of categories"
        :key="category.img"
        class="text-white grid place-items-center gap-5 text-center"
      >
        <div class="p-10"><img :src="category.img" class="w-full" alt={{category.img}} /></div>
        <h3 class="text-3xl font-bold">{{ category.title }}</h3>
        <p class="w-3/4">{{ category.desc }}</p>
      </div>
    </div>
  </section>
</template>
