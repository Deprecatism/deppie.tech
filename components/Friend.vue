<script setup lang="ts">
const friend = defineProps<{
  avatar: string;
  display_name: string | null;
  name: string;
  socials: {
    website?: string;
    github?: string;
    anilist?: string;
  };
}>();
</script>

<template>
  <div class="flex items-center gap-2.5 w-full rounded-2xl bg-[#101010] p-2.5 transition ease-in-out hover:scale-112">
    <img class="size-15 rounded-2xl" :src="friend.avatar" />
    <div class="">
      <p class="font-bold text-start text-xl">
        {{ friend.display_name ? friend.display_name : friend.name }}
      </p>
      <p class="text-[#7f849c] font-light text-base" v-if="friend.display_name">
        {{ friend.name }}
      </p>
    </div>
    <div class="grid grid-cols-2 gap-2.5 ml-auto align-end">
      <div v-for="(i, social) in friend.socials" :key="social">
        <a class="flex items-center justify-center rounded-full" :href="i" target="_blank" rel="noopener noreferrer">
          <Icon :name="(social != 'website' ? 'simple-icons:' : 'my-icon:') + social" size="25px"
            style="color: white" />

        </a>
      </div>
    </div>
  </div>
</template>
