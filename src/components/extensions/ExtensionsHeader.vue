<template>
  <div class="extensions-toolbar">
    <h2 class="header-title" aria-label="List of browser extensions">Extensions List</h2>

    <div class="extensions-filter">
      <UiButton
        v-for="option in options"
        :key="option.value"
        :text="option.label"
        :variant="option.value === extensionStore.filter ? 'danger' : 'default'"
        :aria-pressed="option.value === extensionStore.filter"
        @click="extensionStore.setFilter(option.value)"
      />
    </div>
  </div>
</template>

<script setup>
import { useExtensionStore } from '@/stores/extensionStore'
import UiButton from "@/components/ui/UiButton.vue";

const extensionStore = useExtensionStore()

const options = [
  { value: 'all', label: 'All' },
  { value: 'active', label: 'Active' },
  { value: 'inactive', label: 'Inactive' }
]
</script>

<style scoped>
.extensions-toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.extensions-filter {
  display: flex;
  gap: var(--spacing-xs);
}

.header-title {
  font-size: var(--text-heading);
  font-weight: var(--font-weight-semibold);
}
</style>
