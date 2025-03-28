// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
	
// https://astro.build/config
export default defineConfig({
	site: "https://meiyo40.github.cio",
	base: "/",
	integrations: [
		starlight({
			title: "My Docs",
			social: {
				github: "https://github.com/withastro/starlight",
			},
			sidebar: [
				{
					label: "Get started",
					items: [
						// Each item here is one entry in the navigation menu.
						{
							label: "Plugin installation",
							slug: "get-started"
						},
						{
							label: "Create your stat component",
							slug: "create-component"
						}
					],
				},
				{
					label: "Classes",
					items: [
						// Each item here is one entry in the navigation menu.
						{
							label: "UStatBase",
							slug: "classes/ustatbase"
						}
					],
				}
			],
		}),
	],
});
