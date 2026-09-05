<script setup lang="ts">
    defineProps<{
        name: string;
        url?: string;
        description?: string;
    }>();
</script>

<template>
    <a
        :href="url"
        target="_blank"
        rel="noopener noreferrer"
        class="block">
        <div
            class="flex min-h-full flex-col gap-4 rounded-2xl bg-[#101010] p-2.5 transition ease-in-out hover:scale-[1.04]">
            <p class="text-xl font-bold">
                {{ name }}
            </p>

            <p class="text-[#7f849c]">
                {{ description || "No description" }}
            </p>
        </div>
    </a>
</template>
