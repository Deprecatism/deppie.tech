<template>
    <div
        class="flex flex-col w-full mt-[5%] mb-[5%] gap-y-10 justify-center items-center self-center"
    >
        <div
            class="flex md:flex-row flex-col items-center justify-center gap-25 w-full"
        >
            <img src="/avatar.png" class="size-40 md:size-48 rounded-full" />
            <div class="flex flex-col gap-y-5 items-center justify-center">
                <h1 class="font-bold text-5xl">{{ userdata.username }}</h1>
                <hr class="flex border border-[#cba6f7]/25 w-full" />
                <div class="grid grid-cols-2 gap-5 place-items-center">
                    <div v-for="(i, social) in userdata.socials" :key="social">
                        <a
                            class="flex items-center justify-center rounded-full"
                            :href="i"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Icon
                                :name="'simple-icons:' + social"
                                size="50px"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <hr class="flex border border-[#cba6f7]/25 size-auto w-[75%]" />
        <div class="flex items-start justify-start w-[75%]">
            <p class="text-xl text-start whitespace-pre-line">
                {{ userdata.about }}
            </p>
        </div>
        <hr class="flex border border-[#cba6f7]/25 size-auto w-[75%]" />
        <div class="flex flex-col md:flex-row gap-x-5">
            <div class="flex flex-col gap-y-5">
                <h2 class="font-bold text-4xl mx-30">Friends</h2>
                <div class="flex flex-col" v-for="friend in friends">
                    <div
                        class="flex items-center gap-5 w-full rounded-full outline outline-offset-4 outline-[#f38ba8]/50"
                    >
                        <img
                            class="size-20 rounded-full"
                            :src="friend.avatar"
                        />
                        <div class="">
                            <p class="font-bold text-start text-3xl">
                                {{
                                    friend.display_name
                                        ? friend.display_name
                                        : friend.name
                                }}
                            </p>
                            <p
                                class="text-[#7f849c] font-light text-xl"
                                v-if="friend.display_name"
                            >
                                {{ friend.name }}
                            </p>
                        </div>
                        <div class="grid grid-cols-2 gap-2.5 ml-auto px-10">
                            <div
                                v-for="(i, social) in friend.socials"
                                :key="social"
                            >
                                <a
                                    class="flex items-center justify-center rounded-full"
                                    :href="i"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Icon
                                        v-if="social != 'website'"
                                        :name="'simple-icons:' + social"
                                        size="25px"
                                    />

                                    <img
                                        v-else
                                        :src="i + '/favicon.ico'"
                                        class="size-7"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr class="flex border border-[#cba6f7]/25 size-auto" />
            <div class="flex flex-col gap-y-4 w-[75%]">
                <h2 class="font-bold text-4xl mx-30">Repos</h2>
                <div v-if="!repositoriesError" class="flex flex-col gap-y-5">
                    <template v-for="(repo, index) in repositoryList">
                        <div
                            v-if="repo"
                            class="rounded-full outline outline-offset-4 outline-[#f38ba8]/50 p-3"
                        >
                            <a
                                :href="repo.url || '#'"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="font-bold text-xl"
                            >
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
    </div>
</template>

<script lang="ts" setup>
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
