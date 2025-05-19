<template>
  <header class="app-header">
    <div class="logo-container">
      <IconLogo class="app-logo"/>
      <h1>Extensions</h1>
    </div>
    <ThemeToggle />
  </header>
</template>

<script setup>
import ThemeToggle from "@/components/ThemeToggle.vue"
import IconLogo from '@/components/icons/IconLogo.vue'
</script>

<style scoped>
.app-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-xs) var(--spacing-sm);
  min-height: 64px;
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
  width: 2.5rem;
  height: 2.5rem;
}
</style>
