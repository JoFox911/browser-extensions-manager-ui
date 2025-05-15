<template>
  <button
    :class="[
      'ui-button',
      variantClass,
      { active, 'with-text': !!text }
    ]"
    @click="$emit('press')"
  >
    <span v-if="text">{{ text }}</span>
  </button>
</template>

<script setup>
const props = defineProps({
  text: String,
  variant: {
    type: String,
    default: 'default' // 'default' | 'hover' | 'danger'
  },
  active: {
    type: Boolean,
    default: false
  }
})

const variantClass = {
  default: 'variant-default',
  hover: 'variant-hover',
  danger: 'variant-danger'
}[props.variant]

</script>

<style scoped>
.ui-button {
  border-radius: 999px;
  padding: 0.4rem 1rem;
  font-weight: 500;
  font-family: inherit;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  font-size: 14px;
  border: 1px solid transparent;
  transition: all 0.3s ease;
  cursor: pointer;
  user-select: none;
  background-color: var(--color-el-background);
}

.variant-default {
  background-color: var(--neutral-700);
  color: var(--neutral-0);
  border-color: var(--neutral-600);
}

.variant-hover:hover {
  background-color: transparent;
  color: var(--red-400);
  border-color: var(--red-400);
}

.variant-danger {
  background-color: var(--red-500);
  color: var(--neutral-0);
}

.active {
  background-color: var(--red-500) !important;
  color: var(--neutral-0);
  border-color: var(--red-500);
}
</style>
