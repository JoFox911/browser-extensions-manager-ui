<template>
  <div class="extension-card" role="region" :aria-label="`Extension: ${extension.name}`">
    <div class="extension-data">
      <img :src="extension.logo" :alt="extension.name" class="extension-logo" />

      <div class="extension-info">
        <h3>{{ extension.name }}</h3>
        <p class="extension-description">{{ extension.description }}</p>
      </div>
    </div>


    <div class="extension-controls">
      <UiButton class="remove-btn" text="Remove" variant="danger" @press="$emit('remove')" />
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
  min-height: 172px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: var(--spacing-sm);
  background-color: var(--color-el-bg);
  padding: var(--spacing-md);
  border-radius: var(--border-radius-lg);
  border: 1px solid var(--color-el-border);
  transition:
    background-color 0.3s ease;
  box-shadow: var(--shadow-default);
}

.extension-data {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 1rem;
  flex: 1;
}

.extension-logo {
  width: 60px;
  height: 60px;
  border-radius: var(--border-radius-sm);
  object-fit: cover;
}

.extension-info {
  flex: 1;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xxs)
}

.extension-description {
  font-size: var(--text-caption);
  font-weight: var(--font-weight-regular);
  color: var(--color-text-caption);
  opacity: 0.8;
}

.extension-controls {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.remove-btn {
  font-size: var(--text-caption);
  font-weight: var(--font-weight-regular);
}
</style>
