module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
    'plugin:prettier/recommended',
    'plugin:vue/vue3-recommended',
    'prettier',
  ],
  rules: {
    curly: 1,
    '@typescript-eslint/consistent-type-imports': 'warn',
    'vue/multi-word-component-names': 0,
    'vue/no-v-model-argument': 0,
    'vue/no-v-html': 0,
    'vue/no-multiple-template-root': 0,
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
        },
      },
    ],
    'vue/component-tags-order': [
      'error',
      {
        order: ['script', 'template', 'style'],
      },
    ],
    'vue/component-name-in-template-casing': [
      'error',
      'PascalCase',
      {
        registeredComponentsOnly: false,
      },
    ],
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'vue/no-v-for-template-key': 0,
    'vue/padding-line-between-blocks': 1,
  },
  overrides: [
    {
      files: ['*.json'],
      rules: {
        'no-unused-expressions': ['off'],
      },
    },
  ],
}
