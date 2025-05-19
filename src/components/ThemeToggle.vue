<template>
  <button class="theme-toggle" @click="toggleTheme" :aria-label="tooltip">
    <component :is="iconComponent" class="icon" />
  </button>
</template>

<script setup>
import { computed } from 'vue'
import { useThemeStore } from '@/stores/themeStore'

import IconSun from '@/components/icons/IconSun.vue'
import IconMoon from '@/components/icons/IconMoon.vue'

const themeStore = useThemeStore()

const resolvedTheme = computed(() => themeStore.resolvedTheme)

const toggleTheme = () => {
  themeStore.setTheme(resolvedTheme.value === 'dark' ? 'light' : 'dark')
}

const iconComponent = computed(() =>
  resolvedTheme.value === 'dark' ? IconSun : IconMoon
)

const tooltip = computed(() =>
  resolvedTheme.value === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'
)
</script>

<style scoped>
.theme-toggle {
  line-height: 0;
  background-color: var(--color-el-bg-variant);
  border: none;
  cursor: pointer;
  padding: var(--spacing-sm);
  transition: transform 0.2s ease;
  border-radius: var(--border-radius-md);
}

.theme-toggle:hover {
  background-color: var(--color-el-bg-variant-hover);
}

.icon {
  width: 1.3rem;
  height: 1.3rem;
  display: block;
}
</style>
