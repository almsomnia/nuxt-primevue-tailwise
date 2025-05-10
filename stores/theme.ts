export const useThemeStore = defineStore("theme", () => {
   const value = computed<Theme | null>(() => {
      if (import.meta.client) {
         if (localStorage.getItem("theme") === null) {
            localStorage.setItem("theme", "dagger")
         }
      }
      return localStorage.getItem("theme") as Theme
   })

   function setTheme(theme: Theme) {
      localStorage.setItem("theme", theme)
   }

   return {
      value,
      setTheme
   }
})
