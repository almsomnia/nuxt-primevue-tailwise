<script setup lang="ts">
const theme = useThemeStore()
const layout = ref<ReturnType<typeof h>>(h(resolveComponent("DaggerBase")))

function resolveTheme(theme: Theme) {
   switch (theme) {
      case "dagger":
         layout.value = h(resolveComponent("DaggerBase"))
         break
      case "echo":
         layout.value = h(resolveComponent("EchoBase"))
         break
      case "exort":
         layout.value = h(resolveComponent("ExortBase"))
         break
      default:
         break
   }
}

watch(
   () => theme.value,
   (theme) => theme && resolveTheme(theme),
   {
      immediate: true
   }
)
</script>

<template>
   <component :is="layout">
      <slot />
   </component>
</template>
