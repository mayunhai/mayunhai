module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/essential` for stricter rules.
    'plugin:vue/recommended',
    'eslint:recommended',
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    'vue/max-attributes-per-line': ['error', {
      // 单行情况标签最多可接受3个属性
      singleline: 3,
      multiline: {
        max: 1,
        allowFirstLine: false
      }
    }],
    // 关闭单行元素的内容之前和之后强制换行
    'vue/singleline-html-element-content-newline': 'off',
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-alert': 'off',
    'block-spacing': 'error',
    // 不禁止 console
    'no-console': 'off',
    // 空行规则
    'no-multiple-empty-lines': ['error', {
      max: 1,
      maxEOF: 1
    }],
    // 缩进
    'vue/html-indent': ['error', 2, {
      attribute: 1,
      closeBracket: 0,
      alignAttributesVertically: true
    }],
    indent: ['error', 2, {
      SwitchCase: 1
    }],
    'default-case': 'error',
    // 'no-empty-function': ['error', { "allow": ["functions"] }],
    'no-with': 'error',
    'no-eq-null': 'error',
    'no-eval': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'spaced-comment': ['error', 'always'],
    // "linebreak-style": ['error', "windows"],
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    'space-before-function-paren': ['error', 'never'],
    curly: 'error',
    'no-spaced-func': 'error',
    'no-constant-condition': 'error',
    'no-multi-spaces': 'error',
    'no-labels': 'error',
    'no-loop-func': 'error',
    'no-var': 'error',
    'comma-spacing': ['error', {
      before: false,
      after: true
    }],
    // 禁止或强制在括号内使用空格
    'array-bracket-spacing': ['error', 'never'],
    // 支持原型链扩展
    'no-extend-native': 0,
    // 暂时不做 === 控制
    eqeqeq: 0,
    'prefer-promise-reject-errors': 0
    // "space-after-keywords": 'error'
  },
  globals: {
    bodymovin: true
  }
}
