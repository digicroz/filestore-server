import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/**/*.ts', '!src/**/*.test.ts', '!src/**/*.spec.ts', '!src/**/*.d.ts'],
  format: ['esm', 'cjs'],
  dts: false,
  onSuccess: 'tsc --emitDeclarationOnly --declaration',
  sourcemap: true,
  splitting: false,
  clean: true,
  treeshake: true,
  tsconfig: './tsconfig.json',
});
