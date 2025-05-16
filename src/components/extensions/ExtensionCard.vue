<template>
  <div class="extension-card">
    <!-- <img src="@/assets/images/logo-devlens.svg" :alt="extension.name" class="extension-logo" /> -->
    <img :src="extension.logo" :alt="extension.name" class="extension-logo" />

    <div class="extension-info">
      <h3 class="extension-name">{{ extension.name }}</h3>
      <p class="extension-description">{{ extension.description }}</p>
    </div>

    <div class="extension-controls">
      <UiButton text="Remove" @press="$emit('remove')" />
      <UiToggle :model-value="extension.isActive" @update:modelValue="$emit('toggle')" />
    </div>
  </div>
</template>

<script setup>
import UiButton from '@/components/ui/UiButton.vue'
import UiToggle from '@/components/ui/UiToggle.vue'

defineProps({
  extension: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
.extension-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  background-color: var(--color-el-background);
  padding: 1rem;
  border-radius: var(--border-radius-lg);
  border: 1px solid var(--color-el-border);
  transition: background-color 0.3s ease;
}

.extension-logo {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  object-fit: cover;
  background-color: #b3d7ea; /* fallback */
}

.extension-info {
  flex: 1;
  text-align: left;
}

.extension-name {
  margin: 0;
  font-size: var(--text-md);
  font-weight: var(--font-weight-semibold);
  color: var(--text-primary);
}

.extension-description {
  margin: 0.2rem 0 0;
  font-size: var(--text-sm);
  color: var(--text-secondary);
}

.extension-controls {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  gap: 0.5rem;
}
</style>
