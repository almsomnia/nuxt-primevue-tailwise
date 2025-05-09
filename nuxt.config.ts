// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath } from "node:url"
import { join, dirname } from "node:path"
import tailwindcss from "@tailwindcss/vite"
import { preset } from "./theme"

const currentDir = dirname(fileURLToPath(import.meta.url))

export default defineNuxtConfig({
   compatibilityDate: "2025-05-09",
   devtools: { enabled: true },

   css: [join(currentDir, "./assets/css/main.css")],
   modules: ['@primevue/nuxt-module'],

   primevue: {
      options: {
         theme: {
            preset: preset,
            options: {
               darkModeSelector: '.dark-mode',
               cssLayer: {
                  name: "primevue",
                  order: "theme, base, primevue"
               }
            }
         }
      }
   },

   vite: {
      plugins: [tailwindcss()],
   },
})
