import { resolve } from "path";
import { fileURLToPath } from "url";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    "@/assets/styles/main.module.scss",
    "@anu-vue/preset-theme-default/dist/styles.scss",
  ],
  buildModules: [
    "@nuxtjs/google-fonts",
  ],
  modules: [
    "@anu-vue/nuxt", 
    "@unocss/nuxt",
    "nuxt-icon",
    "nuxt-vuefire",
  ],
  ssr: true,
  unocss: {
    // presets
    uno: true, // enabled `@unocss/preset-uno`
    icons: true, // enabled `@unocss/preset-icons`
    attributify: true, // enabled `@unocss/preset-attributify`,

    // core options
    shortcuts: [],
    rules: [],
  },
  googleFonts: {
    families: {
      Rubik: true,
      Righteous: true,
      'Josefin+Sans': true,
    }
  },
  vuefire: {
    auth: true,
    config: {
      apiKey: "AIzaSyBhA2fFoccuBdvKToQ2Gwy7gSNgK63zEXo",
      authDomain: "proto-inbox.firebaseapp.com",
      projectId: "proto-inbox",
      storageBucket: "proto-inbox.appspot.com",
      messagingSenderId: "685313573002",
      appId: "1:685313573002:web:e10e870d7cd17502612d73",
      measurementId: "G-R4D3SHSXTX"
    },

    admin: {
      config: {},
      // FIXME: remove as it should be automatic on vuefire
      serviceAccount: resolve(
        fileURLToPath(new URL("./proto-inbox-firebase-adminsdk-yw5ue-6e36d4fa6d.json", import.meta.url))
      )
    }
  },
})