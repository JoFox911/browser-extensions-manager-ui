<template>
  <div class="default-layout">
    <div class="page-content">
      <AppHeader />
      <main class="main-content">
        <router-view />
      </main>
    </div>
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
  align-items: center;
  min-width: 100vw;
}

.page-content {
  padding: var(--spacing-lg);
  max-width: 800px;
}

.main-content {
  flex: 1;
}
</style>
