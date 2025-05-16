<template>
  <div class="extension-card">
    <div class="extension-data">
      <img :src="extension.logo" :alt="extension.name" class="extension-logo" />

      <div class="extension-info">
        <h3 class="extension-name">{{ extension.name }}</h3>
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
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-sm);
  background-color: var(--color-el-bg);
  padding: var(--spacing-md);
  border-radius: var(--border-radius-lg);
  border: 1px solid var(--color-el-border);
  transition: background-color 0.3s ease;
  box-shadow: var(--color-box-shadow);
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
  width: 40px;
  height: 40px;
  border-radius: var(--border-radius-sm);
  object-fit: cover;
}

.extension-info {
  flex: 1;
  text-align: left;
}

.extension-name {
  margin: 0;
  font-size: var(--text-body);
  font-weight: var(--font-weight-semibold);
}

.extension-description {
  margin: 0.2rem 0 0;
  font-size: var(--text-caption);
  font-weight: var(--font-weight-regular);
  color: var(--neutral-300);
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
