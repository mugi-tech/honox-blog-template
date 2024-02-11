import pages from '@hono/vite-cloudflare-pages';
import devServer from '@hono/vite-dev-server';
import honox from 'honox/vite';
import client from 'honox/vite/client';
import { defineConfig } from 'vite';

const entry = './app/server.ts';

export default defineConfig(({ mode }) => {
  if (mode === 'client') {
    return {
      plugins: [client()],
      build: {
        rollupOptions: {
          input: ['/app/style.css'],
          output: {
            assetFileNames: 'static/assets/[name].[ext]',
          },
        },
      },
    };
  } else {
    return {
      plugins: [honox(), devServer({ entry }), pages()],
    };
  }
});
