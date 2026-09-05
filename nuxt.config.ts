import tailwindcss from "@tailwindcss/vite";
import { createResolver } from "nuxt/kit";

const { resolve } = createResolver(import.meta.url);

export default defineNuxtConfig({
    extends: "./assets",
    app: {
        head: {
            title: "deppie.tech",
            htmlAttrs: {
                lang: "en",
            },
        },
    },
    runtimeConfig: {
        githubToken: "",
    },
    compatibilityDate: "2024-11-01",

    devtools: {
        enabled: true,

        timeline: {
            enabled: true,
        },
    },

    css: ["~/assets/style.css"],

    vite: {
        server: {
            allowedHosts: ["deprecatedpc.echidna-fir.ts.net"],
        },
        plugins: [...tailwindcss()],
    },

    modules: ["@nuxt/icon"],
    icon: {
        mode: "css",
        cssLayer: "base",
        provider: "none",
        clientBundle: {
            icons: [
                "simple-icons:github",
                "simple-icons:anilist",
                "simple-icons:spotify",
                "simple-icons:discord",
            ],
        },
        customCollections: [
            {
                prefix: "my-icon",
                dir: resolve("./assets/my-icons"),
                recursive: true,
                // if you want to include all the icons in nested directories:
                // recursive: true,
            },
        ],
    },
} as any);
