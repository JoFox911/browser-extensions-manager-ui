<script setup>
import DefaultLayout from './layouts/DefaultLayout.vue'
import { useThemeStore } from '@/stores/themeStore'

const themeStore = useThemeStore()
themeStore.initTheme()
</script>

<template>
  <DefaultLayout/>
</template>

