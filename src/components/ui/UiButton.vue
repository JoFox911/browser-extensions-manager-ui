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
    'is-active': props.active
  }
])
</script>

<style scoped>
.ui-button {
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-xxs) var(--spacing-sm);
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
}

.ui-button:hover {
  opacity: var(--btn-hover-opacity);
}

.is-active {
  background-color: var(--color-btn-danger-bg);
  color: var(--color-btn-danger-text);
  border-color: var(--color-btn-danger-border);
}

.variant-default,
.variant-danger {
  background-color: var(--color-btn-bg);
  color: var(--color-btn-text);
  border-color: var(--color-btn-border);
}

.variant-default:hover {
  background-color: var(--color-btn-bg-hover);
}

.variant-danger:hover,
.is-active:hover {
  background-color: var(--color-btn-danger-bg-hover);
  border-color: var(--color-btn-danger-bg-hover);
  color: var(--color-btn-danger-text);
}
</style>
