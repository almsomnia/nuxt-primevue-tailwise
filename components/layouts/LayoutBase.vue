<script setup lang="ts">
type ThemeList = Array<{ theme: Theme, component: ReturnType<typeof h> }>

const theme = useThemeStore()
const layout = ref<ReturnType<typeof h>>(h(resolveComponent("DaggerBase")))

function resolveTheme(theme: Theme) {
   const componentMap: ThemeList = [
      { theme: "dagger", component: h(resolveComponent("DaggerBase")) },
      { theme: "echo", component: h(resolveComponent("EchoBase")) },
      { theme: "exort", component: h(resolveComponent("ExortBase")) },
      { theme: "havoc", component: h(resolveComponent("HavocBase")) },
   ]
   const selectedTheme = componentMap.find((item) => item.theme === theme)
   if (!selectedTheme) {
      throw new Error("Theme not found")
   }
   layout.value = selectedTheme.component
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
