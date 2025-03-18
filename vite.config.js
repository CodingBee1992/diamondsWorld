import { defineConfig } from 'vite'
import Inspect from 'vite-plugin-inspect'
import checker from 'vite-plugin-checker'
import path, { resolve } from 'path'
import { sync } from 'glob'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

export default defineConfig( {
	base:'/diamondsWorld/',
	esbuild: {
		jsxFactory: 'create',
		jsxInject: `import {create} from './create'`,
	},
	plugins: [
		Inspect(),
		checker({
			typescript: true,
		}),
		ViteImageOptimizer({
			png: {
				
				quality: 100,
			  },
			  jpeg: {
				
				quality: 100,
			  },
			  jpg: {
				
				quality: 80,
			  },
		  }),
	],
	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, 'index.html'),
				login: resolve(__dirname, './src/pages/login/login.html'),
				shop: resolve(__dirname, './src/pages/shop/shopList.html'),
				items: resolve(__dirname, './src/pages/shop/products.html'),
				item: resolve(__dirname, './src/pages/shop/item.html/?id=3'),
			},
			external:['collect.js']
		},
	},
	envPrefix: 'APP_',

	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
})
