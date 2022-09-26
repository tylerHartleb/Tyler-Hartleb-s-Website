import { defineStore } from "pinia";

export const useThemeStore = defineStore({
  id: "colors",
  state: () => ({
    currentTheme: 'default',
    themes: {
      0: 'default',
      1: 'purple',
      2: 'blue',
      3: 'green',
      4: 'red'
    },
  }),
  getters: {
    numThemes: (state) => { return Object.keys(state.themes).length }
  },
  actions: {
    setTheme(number) {
      this.currentTheme = this.themes?.[number] ?? 'default';
      document.documentElement.classList.toggle('_' + this.currentTheme);
    },
  },
});
