<template>
  <section class="extensions-toolbar" aria-label="Extensions toolbar">
    <h2>Extensions List</h2>

    <div class="extensions-filter">
      <UiButton
        v-for="option in options"
        :key="option.value"
        :text="option.label"
        :aria-pressed="isSelected(option.value)"
        :active="isSelected(option.value)"
        @click="extensionStore.setFilter(option.value)"
      />
    </div>
  </section>
</template>

<script setup>
import { useExtensionStore } from '@/stores/extensionStore'
import UiButton from "@/components/ui/UiButton.vue"

const extensionStore = useExtensionStore()

const options = [
  { value: 'all', label: 'All' },
  { value: 'active', label: 'Active' },
  { value: 'inactive', label: 'Inactive' }
]

const isSelected = (val) => extensionStore.filter === val
</script>

<style scoped>
.extensions-toolbar {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: var(--spacing-md);
  gap: var(--spacing-md);
}

.extensions-filter {
  display: flex;
  gap: var(--spacing-xs);
}

@media (max-width: 560px) {
  .extensions-toolbar {
    justify-content: center;
    text-align: center;
  }
}
</style>
