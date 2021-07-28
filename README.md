## eslint-config-zc-base

通过 npm 包的方式给你的项目引入 eslint 规则

## 安装依赖

```
npm install eslint-config-zc-base --save-dev
```

## 使用

在 package.json 里新增字段 eslint。（也可以新建文件 eslintrc）

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
```

## 详细文档

https://xiaozhuanlan.com/topic/0716948325
