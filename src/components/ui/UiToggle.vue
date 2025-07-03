<template>
  <button
    class="ui-toggle"
    role="switch"
    :aria-checked="modelValue.toString()"
    @click="$emit('update:modelValue', !modelValue)"
  >
    <span class="slider" />
  </button>
</template>


<script setup>
defineProps({
  modelValue: Boolean
})
defineEmits(['update:modelValue'])
</script>

<style scoped>
.ui-toggle {
  position: relative;
  width: 28px;
  height: 16px;
  display: inline-block;
  background-color: var(--color-toggle-bg);
  border-radius: 20px;
  cursor: pointer;
  padding: 0;
  border: none;
  transition: background-color 0.2s ease;
}

.ui-toggle[aria-checked="true"] {
  background-color: var(--red-400);
}

.ui-toggle .slider {
  position: absolute;
  top: 2px;
  left: 2px;
  height: 12px;
  width: 12px;
  background-color: var(--neutral-0);
  border-radius: 50%;
  transition: transform 0.2s ease;
  transform: translateX(0);
}

.ui-toggle[aria-checked="true"] .slider {
  transform: translateX(12px);
}
</style>
