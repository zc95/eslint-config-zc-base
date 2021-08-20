通过npm包的方式在项目中引入自己定义的eslint、stylelint规则

## 链接
- https://www.npmjs.com/package/eslint-config-zc-base
- https://www.npmjs.com/package/stylelint-config-zc-base

## 安装依赖
```js
npm i eslint-config-zc-base --save-dev
npm i stylelint-config-zc-base --save-dev
```

## 安装 vscode 插件
ESlint、stylelint

## 添加 eslint 配置
在 package.json 里新增字段 eslintConfig。（也可以新建文件stylelintrc）

```js
// vue项目（需要安装 eslint-plugin-vue、babel-eslint）
"eslintConfig": {
    "root": true,
    "extends": [
        "plugin:vue/essential",
        "eslint-config-zc-base"
    ],
    "parserOptions": {
        "parser": "babel-eslint"
    }
}

// node项目引入
"eslintConfig": {
    "root": true,
    "extends": "eslint-config-zc-base"
}

// 小程序
"eslintConfig": {
    "root": true,
    "extends": "eslint-config-zc-base",
    "rules": {
        "no-shadow": 0
    },
    "globals": {
        "env": true,
        "App": true,
        "Page": true,
        "Component": true,
        "wx": true,
        "getApp": true,
        "getPage": true,
        "getCurrentPages": true
    }
},
```

## 添加 stylelint 配置
在 package.json 里新增字段 stylelint。（也可以新建文件stylelintrc）

```js
// vue项目
"stylelint": {
    "root": true,
    "extends": "stylelint-config-zc-base"
}

// 小程序项目
"stylelint": {
    "root": true,
    "extends": "stylelint-config-zc-base",
    "rules": {
        "unit-no-unknown": [
            true,
            {
                "ignoreUnits": [
                    "rpx"
                ]
            }
        ],
        "selector-type-no-unknown": [
            true,
            {
                "ignore": [
                    "custom-elements",
                    "default-namespace"
                ]
            }
        ]
    }
}
```

## 新建 .editorconfig，统一编辑器格式
```js
# EditorConfig is awesome: http://EditorConfig.org

root = true

[**]
# utf-8编码
charset = utf-8

## 换行符
end_of_line = lf

# 结尾插入新行
insert_final_newline = true

# 使用单引号
quote_type = single

# 空格形式缩进
indent_style = space
indent_size = 4

# 去除结尾空格
trim_trailing_whitespace = true

[*.md]
insert_final_newline = false
trim_trailing_whitespace = false

```

## 新建 .vscode/settings.json，覆盖本地的 vscode 配置
```js
{
    "editor.formatOnSave": false,
    "editor.codeActionsOnSave": {
        "source.fixAll": true,
        "source.fixAll.eslint": true,
        "source.fixAll.stylelint": true
    },
    "json.schemaDownload.enable": false,
    "eslint.format.enable": true,
    "eslint.validate": ["javascript", "javascriptreact", "vue", "html", "vue-html", "wxml"],
    "eslint.workingDirectories": [{ "mode": "auto" }]
}

```

## 新建vue项目的scripts，来实现一键修复lint问题

#### vue-cli项目
需要安装依赖 @vue/cli-service、@vue/cli-plugin-eslint

- npm run lint 一键修复所有能自动修复的eslint问题
- npm run lint-css 检查所有的stylelint问题
- npm run lint-css:fix 一键修复所有能自动修复的stylelint问题

```js
"scripts": {
    "lint": "vue-cli-service lint",
    "lint-css": "stylelint src/**/*.{css,less,scss,vue}",
    "lint-css:fix": "stylelint src/**/*.{css,less,scss,vue} --fix"
},
```

#### react项目或者是webpack项目
```js
"scripts": {
    "lint": "eslint --ext .js,.vue src",
    "lint:fix": "eslint --fix --ext .js,.vue src"
    "lint-css": "stylelint src/**/*.{css,less,scss,vue}",
    "lint-css:fix": "stylelint src/**/*.{css,less,scss,vue} --fix"
},
```

#### QA：为什么vue-cli只有lint，而其他项目需要加一个lint:fix的脚本？
- 因为 vue-cli-service lint 会带自动修复的功能，所以只需要一个脚本
- eslint只是检查，并不带修复功能。而eslint --fix带修复功能

## 重启 vscode
此时eslint、stylelint都正常工作了，第一次保存的时候格式化功能可能会比较慢。

如果还不行，继续npm install，或者把node_modules和package-lock.json都删了再重新安装依赖。
