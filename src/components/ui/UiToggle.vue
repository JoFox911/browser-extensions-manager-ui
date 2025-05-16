<template>
  <label class="ui-toggle">
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
  width: 36px;
  height: 20px;
  display: inline-block;
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
  background-color: hsl(226, 25%, 17%);
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.slider::before {
  content: "";
  position: absolute;
  height: 14px;
  width: 14px;
  left: 3px;
  bottom: 3px;
  background-color: #fff;
  border-radius: 50%;
  transition: transform 0.2s ease;
}

input:checked + .slider {
  background-color: hsl(3, 71%, 56%);
}

input:checked + .slider::before {
  transform: translateX(16px);
}
</style>
