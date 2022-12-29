// vite.config.ts
import Unocss from "unocss/vite"
import { presetAttributify, presetUno } from "unocss"

export default {
  plugins: [
    Unocss({
      presets: [
        presetAttributify({ /* preset options */ }),
        // presetUno(),
        // ...custom presets
      ],
    }),
  ],
}
