/** @format */

import path from 'path';
import ts from 'rollup-plugin-typescript2';
import del from 'rollup-plugin-delete';
import { terser } from 'rollup-plugin-terser';

const tsPlugin = ts({
  check: true,
  tsconfig: path.resolve(__dirname, 'tsconfig.json'),
  cacheRoot: path.resolve(__dirname, 'node_modules/.rts2_cache'),
  tsconfigOverride: {
    compilerOptions: {
      declaration: true,
      declarationMap: true,
    },
    exclude: ['**/tests', 'test-dts'],
  },
});

export default {
  input: './src/index.ts',
  output: [
    {
      file: './dist/shared.js',
      format: 'umd',
      name: 'WaterShared',
    },
    {
      file: './dist/shared.min.js',
      format: 'umd',
      name: 'WaterShared',
    },
  ],
  plugins: [
    del({ targets: 'dist/*' }),
    tsPlugin,
    terser({
      include: [/^.+\.min\.js$/, '*esm*'],
    }),
  ],
};
