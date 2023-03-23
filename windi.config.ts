import { defineConfig } from 'windicss/helpers'
import type { Plugin } from 'windicss/types/interfaces'

// colors
import colors from 'windicss/colors'

// themes
import defaultTheme from 'windicss/defaultTheme'

// plugins
import TypographyPlugin from 'windicss/plugin/typography'
import AspectRatioPlugin from 'windicss/plugin/aspect-ratio'
import FiltersPlugin from 'windicss/plugin/filters'
import FlowbiteWindi from "flowbite-windicss-plugin";

export default defineConfig({
  darkMode: 'class',
  attributify: false,
  extract: {
    include: [
      './components/**/*.{vue,js}',
      './composables/**/*.{js,ts}',
      './content/**/*.md',
      './layouts/**/*.vue',
      './pages/**/*.vue',
      './plugins/**/*.{js,ts}',
      './utils/**/*.{js,ts}',
      './nuxt.config.{js,ts}',
      './app.vue',
      './node_modules/flowbite.{js,ts}',
    ],
  },
  theme: {
    extend: {
      maxWidth: {
        '8xl': '90rem',
      },
      colors: {
        primary: colors.blue,
        slate: colors.slate,
      },
      fontFamily: {
        sans: ['Nunito', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  shortcuts: {
    'light-img': 'block dark:hidden',
    'dark-img': 'hidden dark:block',
  },
  plugins: [
    // filters plugin require for navbar blur
    FiltersPlugin as Plugin,
    TypographyPlugin as Plugin,
    AspectRatioPlugin as Plugin,
    FlowbiteWindi as Plugin,
  ] as Plugin[],
})