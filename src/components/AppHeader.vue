<template>
  <header class="app-header">
    <div class="logo-container">
      <IconLogo class="app-logo"/>
      <h1 class="app-title">Extensions</h1>
    </div>
    <ThemeToggle />
  </header>
</template>

<script setup>
import ThemeToggle from "@/components/ThemeToggle.vue";
import IconLogo from '@/components/icons/IconLogo.vue';
</script>

<style scoped>
.app-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-sm);
  min-height: 56px;
  background-color: var(--color-el-bg);
  border-radius: var(--border-radius-md);
  user-select: none;
}

.logo-container {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
}

.app-logo {
  width: 2rem;
  height: 2rem;
}

.app-title {
  font-size: var(--text-logo);
  font-weight: var(--font-weight-semibold);
}
</style>
