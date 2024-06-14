import path from 'path';
import { appTools, defineConfig } from '@modern-js/app-tools';

// https://modernjs.dev/en/configure/app/usage
export default defineConfig<'rspack'>({
  runtime: {
    router: true,
  },
  plugins: [
    appTools({
      bundler: 'experimental-rspack',
    }),
  ],
  tools: {
    rspack: config => {
      config.resolve = {
        ...(config.resolve ?? {}),
        tsConfig: {
          configFile: path.resolve(__dirname, './tsconfig.json'),
          references: 'auto',
        },
      };
      return config;
    },
    swc: {
      jsc: {
        transform: {
          decoratorVersion: '2022-03',
        },
      },
    },
  },
});
