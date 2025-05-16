import { defineStore } from 'pinia';
import extensionsData from '@/data/data.json';

// Sample data structure for extensions
// {
//   "logo": "/images/logo-devlens.svg",
//   "name": "DevLens",
//   "description": "Quickly inspect page layouts and visualize element boundaries.",
//   "isActive": true
// }

export const useExtensionStore = defineStore('extensionStore', {
  state: () => ({
    extensions: [...extensionsData],
    filter: 'all' // 'all' | 'active' | 'inactive'
  }),
  getters: {
    filteredExtensions(state) {
      if (state.filter === 'active') {
        return state.extensions.filter(ext => ext.isActive)
      } else if (state.filter === 'inactive') {
        return state.extensions.filter(ext => !ext.isActive)
      }
      return state.extensions
    }
  },
  actions: {
    setFilter(filterValue) {
      this.filter = filterValue
    },

    removeExtension(name) {
      this.extensions = this.extensions.filter(ext => ext.name !== name)
    },

    toggleExtensionState(name) {
      const ext = this.extensions.find(ext => ext.name === name)
      if (ext) {
        ext.isActive = !ext.isActive
      }
    }
  },
});