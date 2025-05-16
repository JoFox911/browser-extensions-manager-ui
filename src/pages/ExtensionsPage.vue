<template>
  <div class="extensions-page">
    <ExtensionsHeader />
    <div class="extensions-list">

      <ExtensionCard
        v-for="extension in extensionStore.filteredExtensions"
        :key="extension.name"
        :extension="extension"
        @remove="extensionStore.removeExtension(extension.name)"
        @toggle="extensionStore.toggleExtensionState(extension.name)"
      />

    </div>
  </div>
</template>

<script setup>
import { useExtensionStore } from '@/stores/extensionStore';

import ExtensionCard from "@/components/extensions/ExtensionCard.vue";
import ExtensionsHeader from "@/components/extensions/ExtensionsHeader.vue";

const extensionStore = useExtensionStore()
</script>

<style scoped>
.extensions-page {
  text-align: center;
  margin-top: 20px;
}
</style>