import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import vuelint from 'eslint-plugin-vue'
import a11ylint from 'eslint-plugin-vuejs-accessibility'
import prettierRecommended from 'eslint-plugin-prettier/recommended'
import prettierConfig from 'eslint-config-prettier'

export default tseslint.config(
  { ignores: ['dist/**', 'docs/.vitepress/**'] },
  eslint.configs.recommended,
  tseslint.configs.recommended,
  prettierRecommended,
  ...vuelint.configs['flat/recommended'],
  a11ylint.configs['flat/recommended'],
  {
    files: ['**/*.{ts,js,vue}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        parser: tseslint.parser,
      },
    },
    rules: {
      'no-console': 'error',
      'no-debugger': 'error',
      quotes: ['error', 'single'],
      semi: ['error', 'never'],
      'vue/multi-word-component-names': 'off',
      'vue/no-v-html': 'off',
      '@typescript-eslint/no-unused-expressions': 'off',
    },
  },
  prettierConfig,
)
