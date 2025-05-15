import { defineStore } from 'pinia';
import extensionsData from '@/data/data.json';

// Sample data structure for extensions
// {
//   "logo": "./assets/images/logo-devlens.svg",
//   "name": "DevLens",
//   "description": "Quickly inspect page layouts and visualize element boundaries.",
//   "isActive": true
// }

export const useExtensionStore = defineStore('extensionStore', {
  state: () => ({
    // Define your state properties here
    extensions: [...extensionsData]
  }),
  getters: {
    // Define your getters here
    getExtensionById: (state) => (id) => {
      return state.extensions.find((ext) => ext.id === id);
    },
  },
  actions: {
    // Define your actions here
    addExtension(extension) {
      this.extensions.push(extension);
    },
    removeExtension(id) {
      this.extensions = this.extensions.filter((ext) => ext.id !== id);
    },
  },
});