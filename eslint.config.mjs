import { FlatCompat } from '@eslint/eslintrc';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const config = [
	{
		ignores: ['.next/**'],
	},
];

const compat = new FlatCompat({
	baseDirectory: dirname(fileURLToPath(import.meta.url)),
});

config.push(...compat.config({ extends: ['next/core-web-vitals', 'next/typescript'] }));

export default config;
