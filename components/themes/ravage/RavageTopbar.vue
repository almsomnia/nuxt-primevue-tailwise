<script setup lang="ts">
const sideMenu = useSideMenuStore()
</script>

<template>
   <div
      class="fixed inset-x-0 top-0 mt-3.5 h-[65px] transition-[margin] duration-100 xl:ml-[275px] group-[.side-menu--collapsed]:xl:ml-[90px]"
   >
      <div
         class="box before:dark:bg-darkmode-600/70 before:dark:border-darkmode-500/60 absolute inset-x-0 mx-5 h-full before:absolute before:inset-x-4 before:top-0 before:z-[-1] before:mx-auto before:mt-3 before:h-full before:rounded-lg before:border before:border-slate-200 before:bg-slate-50 before:shadow-sm before:content-[''] after:absolute after:inset-x-0 after:top-0 after:-mt-[15px] after:h-[14px] after:backdrop-blur after:content-['']"
      >
         <div class="flex h-full w-full items-center px-5">
            <div class="flex items-center gap-1 xl:hidden">
               <a
                  href=""
                  @click.prevent="sideMenu.activeMobileMenu = true"
                  class="rounded-full p-2 hover:bg-slate-100"
               >
                  <Icon
                     name="lucide:align-justify"
                     class="h-[18px] w-[18px]"
                  />
               </a>
            </div>
            <!-- SECTION: Breadcrumb -->
            <!-- !SECTION: Breadcrumb -->
            <!-- SECTION: Notification & User Menu -->
            <div class="flex flex-1 items-center">
               <div class="ml-auto flex items-center gap-1">
                  <a
                     href=""
                     class="rounded-full p-2 hover:bg-slate-100"
                     @click.prevent="requestFullScreen"
                  >
                     <Icon
                        name="lucide:expand"
                        class="h-[18px] w-[18px]"
                     />
                  </a>
               </div>
            </div>
            <!-- !SECTION: Notification & User Menu -->
         </div>
      </div>
   </div>
</template>
