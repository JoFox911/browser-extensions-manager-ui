<template>
  <button
    type="button"
    class="ui-toggle"
    role="switch"
    :aria-checked="modelValue.toString()"
    @click="$emit('update:modelValue', !modelValue)"
  >
    <span class="sr-only">
      {{ modelValue ? 'Turn off' : 'Turn on' }}
    </span>
    <span class="slider" aria-hidden="true" />
  </button>
</template>

<script setup lang="ts">
const props = defineProps<{
  modelValue: boolean
}>()

defineEmits(['update:modelValue'])
</script>

<style scoped>
.ui-toggle {
  position: relative;
  width: 28px;
  height: 16px;
  display: inline-block;
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;
}

/* Візуально прихований текст для screen readers */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.slider {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--color-toggle-bg);
  border-radius: 20px;
  transition: background-color 0.2s ease;
}

.slider::before {
  content: "";
  position: absolute;
  height: 12px;
  width: 12px;
  left: 2px;
  bottom: 2px;
  background-color: var(--neutral-0);
  border-radius: 50%;
  transition: transform 0.2s ease;
}

.ui-toggle[aria-checked="true"] .slider {
  background-color: var(--red-400);
}

.ui-toggle[aria-checked="true"] .slider::before {
  transform: translateX(12px);
}
</style>
