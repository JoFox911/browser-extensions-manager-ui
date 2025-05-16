<template>
  <button
    :class="classes"
    type="button"
    @click="$emit('press')"
  >
    <span>{{ text }}</span>
  </button>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  text: String,
  variant: {
    type: String,
    default: 'default',
    validator: value => ['default', 'danger'].includes(value)
  }
})

const classes = computed(() => [
  'ui-button',
  {
    'variant-default': props.variant === 'default',
    'variant-danger': props.variant === 'danger'
  }
])

</script>

<style scoped>
.ui-button {
  border-radius: var(--border-radius-md);
  padding: var(--spacing-xxs) var(--spacing-sm);
  font-size: var(--text-small);
  font-weight: var(--font-weight-medium);
  font-family: inherit;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;
  transition: all 0.3s ease;
  cursor: pointer;
  user-select: none;
}

.ui-button:hover {
  opacity: var(--btn-hover-opacity);
}

.variant-default {
  background-color: var(--color-btn-bg);
  color: var(--color-btn-text);
  border-color: var(--color-btn-border);
}

.variant-default:hover {
  background-color: var(--color-btn-bg-hover);
}

.variant-danger {
  background-color: var(--color-btn-danger-bg);
  color: var(--color-btn-danger-text);
  border-color: var(--color-btn-danger-border);
}

.variant-danger:hover {
  background-color: var(--color-btn-danger-bg-hover);
}
</style>
