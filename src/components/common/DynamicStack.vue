<script setup>
defineProps({
  items: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <section class="dynamic-stack">
    <header>
    <div class="row" v-for="item in items">
      <div class="left-side">{{ item.left }}</div>
      <div class="right-side">{{ item.right }}</div>
    </div>
    </header>
  </section>
</template>

<style scoped>
section.dynamic-stack {
  display: flex;
  flex-direction: column;
  border-top: 2px solid #373C87;
  gap: 1.5rem;
  margin: 1rem auto;

  .row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 2px solid #373C87;
  }
}

header{
  text-align: left;
}
</style>