import { defineConfig } from "astro/config";
import UnoCSS from "unocss/astro";

// https://astro.build/config
export default defineConfig({
    site: "https://slavaver.github.io",
    base: "/web-course-site",
    output: "static",
    integrations: [UnoCSS({ injectReset: true })],
    markdown: {
        syntaxHighlight: "shiki",
        shikiConfig: {
            themes: {
                light: "catppuccin-latte",
                dark: "catppuccin-mocha",
            },
            defaultColor: false,
            wrap: true,
        },
    },
});
