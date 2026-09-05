<template>
    <main class="grid gap-10 p-10">
        <section class="grid gap-10 md:grid-cols-3 place-items-center-safe">
            <div class="grid md:col-span-2">
                <p class="pl-1 text-2xl">Hewo!! I'm</p>
                <p class="font-bold text-7xl">
                    {{ userdata.username }}
                </p>
                <div class="flex justify-center gap-5 pt-5">
                    <div
                        v-for="(url, social) in userdata.socials"
                        :key="social"
                        class="transition ease-in-out hover:scale-112">
                        <a
                            :href="url"
                            target="_blank"
                            rel="noopener noreferrer"
                            :aria-label="social">
                            <Icon
                                :name="`simple-icons:${social}`"
                                size="40px" />
                        </a>
                    </div>
                </div>
            </div>
            <img
                src="/avatar.png"
                class="size-48 rounded-full order-first md:order-last" />
        </section>
        <section class="grid w-full grid-cols-1 gap-5 md:grid-cols-3">
            <div class="grid w-full col-span-2 gap-10 place-items-center-safe">
                <p class="text-xl whitespace-pre-line place-self-start">
                    {{ userdata.about }}
                </p>
                <div
                    v-if="!repositoriesError"
                    class="grid gap-5 w-full">
                    <p class="font-bold text-4xl text-center">Repos</p>
                    <div class="grid md:grid-cols-2 w-full gap-5">
                        <Repository
                            v-for="repo in repositoryList"
                            :key="repo.name"
                            v-bind="repo" />
                    </div>
                </div>
            </div>
            <div
                class="grid gap-5 w-full"
                v-if="friends.length">
                <p class="font-bold text-4xl">Friends</p>
                <div class="grid w-full gap-5">
                    <Friend
                        v-for="friend in friends"
                        :key="friend.name"
                        v-bind="friend" />
                </div>
            </div>
        </section>
    </main>
</template>

<script setup lang="ts">
    import Friend from "~/components/Friend.vue";
    import Repository from "~/components/Repository.vue";

    const userdata = {
        username: "Deppie",
        socials: {
            github: "https://github.com/Deprecatism",
            anilist: "https://anilist.co/user/Dep",
            spotify: "https://open.spotify.com/user/kimbqvs4j88zjmr25anywknvq",
            discord: "https://discord.com/users/688293803613880334",
        },
        about: "I write code and stuff and love reading manwhas and playing rythm games",
    };

    const friends = [
        {
            name: "itswilliboy",
            display_name: "Willi",
            website: "https://itswilli.dev/",
            avatar: "https://itswilli.dev/milo.jpg",
        },
        {
            name: "du_cki",
            display_name: "faaz",
            website: "https://faaz.dev/",
            avatar: "https://avatars.githubusercontent.com/u/70286349",
        },
        {
            name: "blanket",
            avatar: "https://avatars.githubusercontent.com/u/72619456",
        },
        {
            name: "Vahin",
            display_name: "Flying",
            website: "https://vahin.dev/",
            avatar: "https://avatars.githubusercontent.com/u/66386770?",
        },
    ];

    const { data: repositoriesData, error: repositoriesError } = await useFetch(
        "/api/repos",
        {
            default: () => [],
        },
    );

    const repositoryList = (repositoriesData.value ?? []).map((repository) => ({
        ...repository,
        description: repository.description ?? undefined,
    }));
</script>
