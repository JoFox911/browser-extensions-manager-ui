<template>
  <label class="ui-toggle" role="switch" :aria-checked="modelValue.toString()">
    <input type="checkbox" :checked="modelValue" @change="$emit('update:modelValue', $event.target.checked)" />
    <span class="slider" />
  </label>
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
  cursor: pointer;
}

.ui-toggle input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--color-toggle-bg);
  border-radius: 20px;
  cursor: pointer;
  transition:
    background-color 0.2s ease;
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
  transition:
    transform 0.2s ease;
}

input:checked + .slider {
  background-color: var(--red-400);
}

input:checked + .slider::before {
  transform: translateX(12px);
}
</style>
