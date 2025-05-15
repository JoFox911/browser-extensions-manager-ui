<template>
  <div class="default-layout">
    <AppHeader />
    <main class="main-content">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import AppHeader from '@/components/AppHeader.vue'
</script>

<style scoped>
.default-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: var(--spacing-lg);
  max-width: 800px;
}

.main-content {
  flex: 1;
}
</style>
