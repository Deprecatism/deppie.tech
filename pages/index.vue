<template>
    <div class="flex flex-col m-[5%] gap-y-10 justify-center items-center">
        <div class="flex md:flex-row flex-col gap-25">
            <img src="/avatar.png" class="size-40 md:size-48 rounded-full" />
            <div class="flex flex-col gap-y-5 items-center justify-center">
                <h1 class="font-bold text-5xl">{{ userdata.username }}</h1>
                <hr class="flex border border-[#cba6f7]/25 w-full" />
                <div class="grid grid-cols-2 gap-5 place-items-center">
                    <div v-for="(i, social) in userdata.socials" :key="social">
                        <a class="flex items-center justify-center rounded-full" :href="i" target="_blank"
                            rel="noopener noreferrer">
                            <Icon :name="'simple-icons:' + social" size="50px" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex flex-row w-full">
            <div class="flex flex-col w-full justify-center items-center gap-y-10">
                <div class="flex items-start justify-start w-[75%]">
                    <p class="text-xl text-start whitespace-pre-line">
                        {{ userdata.about }}
                    </p>
                </div>
                <hr class="flex border border-[#cba6f7]/25 w-[75%]" />
                <hr class="flex border border-[#cba6f7]/25" />
                <div class="flex flex-col gap-y-4 w-[75%]">
                    <h2 class="font-bold text-4xl mx-30">Repos</h2>
                    <div v-if="!repositoriesError" class="flex flex-col gap-y-5">
                        <template v-for="(repo) in repositoryList">
                            <div class="rounded-full outline outline-offset-4 outline-[#f38ba8]/50 p-3">
                                <a :href="repo.url || '#'" target="_blank" rel="noopener noreferrer"
                                    class="font-bold text-xl">
                                    {{ repo.name }}
                                </a>
                                <p class="text-sm text-[#7f849c] mt-1">
                                    {{ repo.description || "No description" }}
                                </p>
                            </div>
                        </template>
                    </div>
                </div>
            </div>
            <div class="flex flex-col md:flex-col gap-5 justify-end w-100" v-if="friends.length > 0">
                <h2 class="font-bold text-4xl">Friends</h2>
                <Friend v-for="friend in friends" :key="friend.name" v-bind="friend" />
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import Friend from '~/components/Friend.vue';

const userdata = {
    username: "Deppie",
    socials: {
        github: "https://github.com/Deprecatism",
        anilist: "https://anilist.co/user/Dep",
    },
    about: "TODO: Write about myself...",
};

const friends = [
    {
        name: "itswilliboy",
        display_name: "Willi",
        socials: {
            website: "https://itswilli.dev/",
            github: "https://github.com/itswilliboy",
            anilist: "https://anilist.co/user/itswilli/",
        },
        avatar: "https://itswilli.dev/milo.jpg",
    },
    {
        name: "du_cki",
        display_name: "faaz",
        socials: {
            website: "https://faaz.dev/",
            github: "https://github.com/du-cki",
            anilist: "https://anilist.co/user/faaz/",
        },
        avatar: "https://avatars.githubusercontent.com/u/70286349",
    },
    {
        name: "blanket",
        display_name: null,
        socials: {
            github: "https://github.com/blanketsucks",
            anilist: "https://anilist.co/user/blanketsucks/",
        },
        avatar: "https://avatars.githubusercontent.com/u/72619456",
    },
];

const { data: repositoriesData, error: repositoriesError } = await useFetch(
    "/api/repos",
    {
        default: () => [],
    },
);

const repositoryList = repositoriesData.value ?? [];
</script>
