import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', {
  state: () => ({
    theme: 'system' // 'light' | 'dark' | 'system'
  }),
  getters: {
    resolvedTheme(state) {
      if (state.theme === 'system') {
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
      }
      return state.theme
    }
  },
  actions: {
    setTheme(value) {
      this.theme = value
      localStorage.setItem('theme', value)
      this.applyTheme()
    },
    applyTheme() {
      const html = document.documentElement
      html.classList.remove('light', 'dark')
      html.classList.add(this.resolvedTheme)
    },
    initTheme() {
      // 1️⃣ Check localStorage
      const saved = localStorage.getItem('theme')
      if (saved === 'light' || saved === 'dark' || saved === 'system') {
        this.theme = saved
      } else {
        this.theme = 'system'
      }

      // 2️⃣ Apply class to <html>
      this.applyTheme()

      // 3️⃣ Listen for system changes if theme === 'system'
      if (this.theme === 'system') {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', this.applyTheme)
      }
    }
  }
})
