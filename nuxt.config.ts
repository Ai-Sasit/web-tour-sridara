// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Sridara Tour BackOffice",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content: "ระบบจัดการข้อมูลทัวร์ Powered by FinSoft",
        },
      ],
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/favicon.ico",
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
