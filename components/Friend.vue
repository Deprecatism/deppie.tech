<script setup lang="ts">
    defineProps<{
        avatar: string;
        display_name?: string;
        name: string;
        website?: string;
    }>();
</script>

<template>
    <a
        :href="website"
        target="_blank"
        rel="noopener noreferrer"
        class="block w-full">
        <div
            class="flex min-h-full w-full items-center gap-4 rounded-2xl bg-[#101010] p-2.5 transition-transform ease-in-out hover:scale-[1.04]">
            <img
                :src="avatar"
                :alt="display_name ?? name"
                class="size-15 shrink-0 rounded-2xl object-cover" />

            <div class="min-w-0">
                <p class="truncate text-xl font-bold">
                    {{ display_name ?? name }}
                </p>

                <p
                    v-if="display_name"
                    class="truncate text-base font-light text-[#7f849c]">
                    {{ name }}
                </p>
            </div>
        </div>
    </a>
</template>
