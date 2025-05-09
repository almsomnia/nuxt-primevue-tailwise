export default defineAppConfig({
   menu: {
      value: "Hello",
   },
})

declare module "@nuxt/schema" {
   interface AppConfigInput {
      menu: {
         value: string
      }
   }
}
