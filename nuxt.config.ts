// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      script: [
        {
          hid: "cloudflare",
          src: "https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.4/datepicker.min.js",
          defer: true,
        },
      ],
    },
  },
  css: [
    "vuetify/lib/styles/main.sass",
    "@mdi/font/css/materialdesignicons.min.css",
  ],
  build: {
    transpile: ["vuetify"],
  },
  plugins: ["@/plugins/antd"],
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },
  modules: ["nuxt-windicss", "nuxt-icon"],
});
