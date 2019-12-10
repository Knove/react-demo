module.exports = {
  env: {
    es6: true,
    browser: true,
  },
  // 指定eslint规范
  extends: [
    'airbnb',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  // 脚本在执行期间访问的额外的全局变量
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  plugins: ['react', 'import'],
  settings: {
    'import/resolver': {
      webpack: {
        config: 'config/webpack.config.js',
      },
    },
  },
  // 解析器选项
  parserOptions: {
    // 启用 ES6 语法支持
    ecmaVersion: 2018,
    // "script" (默认) 或 "module"（如果你的代码是 ECMAScript 模块)
    sourceType: 'module',
    // 想使用的额外的语言特性
    ecmaFeatures: {
      // 启用 JSX
      jsx: true,
    },
  },
  plugins: [],
  settings: {
  },
  // 额外的规则或覆盖默认的规则
  rules: {
    //允许windows开发环境
    'linebreak-style': [0, 'error', 'windows'],
    // 临时解除import置顶
    'import/first': 0,
    // 未使用警告
    'no-unused-vars': 1,
    // 缩进改为4空格，默认2空格
    'indent': [0, 2],
    // JSX React
    'react/jsx-uses-react': 2,
    // 单引号
    'quotes': [1, 'single'],
    // 允许 tsx
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.tsx', '.jsx'] }],
    // 允许导入
    'import/no-unresolved': [2, { caseSensitive: false }],
    // 短表达式
    'no-unused-expressions': ["error", { "allowShortCircuit": true }],
    // 不允许普通的 log
    'no-console': ["error", { allow: ["warn", "error"] }],
    // no-param-reassign
    'no-param-reassign': ["error", { "props": false }],

    'no-unused-vars': 0,
    'react/display-name': 0,
    'prefer-const': 1,

    // jsx-a11y 的一些苛刻规则
    'jsx-a11y/click-events-have-key-events': 0
  },
};
