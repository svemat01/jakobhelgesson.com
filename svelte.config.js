import adapter from '@sveltejs/adapter-static';
import path from 'node:path';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // Consult https://github.com/sveltejs/svelte-preprocess
    // for more information about preprocessors
    preprocess: [
        preprocess({
            scss: {
                prependData: '@use "src/variables.scss" as *;'
            }
        })
    ],

    kit: {
        adapter: adapter(),
        vite: {
            resolve: {
                alias: {
                    $components: path.resolve('./src/lib/components'),
                    $data: path.resolve('./src/lib/data'),
                    $util: path.resolve('./src/lib/util')
                }
            },

            css: {
                preprocessorOptions: {
                    scss: {
                        additionalData: '@use "src/variables.scss" as *;'
                    }
                }
            }
        }
    }
};

export default config;
