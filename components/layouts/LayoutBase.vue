<script setup lang="ts">
const theme = useThemeStore()
const layout = ref<ReturnType<typeof h>>(h(resolveComponent("DaggerBase")))

function resolveTheme(theme: Theme) {
   switch (theme) {
      case "dagger":
         layout.value = h(resolveComponent("DaggerBase"))
         break
      default:
         break
   }
}

watch(
   () => theme.value,
   (theme) => theme && resolveTheme(theme)
)
</script>

<template>
   <!-- <component :is="layout">
      <slot />
   </component> -->
   <DaggerBase>
      <slot />
   </DaggerBase>
</template>
