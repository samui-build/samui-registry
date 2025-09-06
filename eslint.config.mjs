import { FlatCompat } from '@eslint/eslintrc'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import sort from 'eslint-plugin-sort'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  {
    ignores: ['node_modules/**', '.next/**', 'out/**', 'build/**', 'tmp/**', 'next-env.d.ts'],
  },
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  sort.configs['flat/recommended'],
  {
    rules: {
      'sort/string-enums': 'error',
      'sort/string-unions': 'error',
      'sort/type-properties': 'error',
    },
  },
  eslintPluginPrettierRecommended,
]

export default eslintConfig
