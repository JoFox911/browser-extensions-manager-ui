<template>
  <button
    :class="classes"
    type="button"
    :aria-pressed="props.active.toString()"
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
  },
  active: {
    type: Boolean,
    default: false
  }
})

const classes = computed(() => [
  'ui-button',
  {
    'variant-default': props.variant === 'default' && !props.active,
    'variant-danger': props.variant === 'danger',
    'is-selected': props.active
  }
])
</script>

<style scoped>
.ui-button {
  border-radius: var(--border-radius-xl);
  padding: var(--spacing-xs) var(--spacing-md);
  font-size: inherit;
  font-weight: inherit;
  font-family: inherit;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;
  transition: all 0.3s ease;
  cursor: pointer;
  user-select: none;
  background-color: var(--color-btn-bg);
  color: var(--color-btn-text);
  border-color: var(--color-btn-border);
}

.ui-button:hover {
  opacity: var(--btn-hover-opacity);
}

.is-selected {
  background-color: var(--color-btn-danger-bg);
  color: var(--color-btn-danger-text);
  border-color: var(--color-btn-danger-border);
}

.variant-default:hover {
  background-color: var(--color-btn-bg-hover);
}

.variant-danger:hover,
.is-selected:hover {
  background-color: var(--color-btn-danger-bg-hover);
  border-color: var(--color-btn-danger-bg-hover);
  color: var(--color-btn-danger-text);
}
</style>
