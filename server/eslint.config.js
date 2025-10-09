import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import path from 'path'
import { fileURLToPath } from 'url'
import eslintConfigPrettier from 'eslint-config-prettier'
import { defineConfig } from "eslint/config";


const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default defineConfig([

  { ignores: ['dist/**', '**/*.config.*'] },

  js.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: __dirname
      },
      globals: { ...globals.node }
    },
    rules: {
      '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports' }]
    }
  },
  eslintConfigPrettier
])
