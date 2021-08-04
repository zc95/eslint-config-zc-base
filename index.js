module.exports = {
    env: {
        browser: true,
        es6: true,
        commonjs: true,
        node: true,
    },
    extends: "eslint:recommended", // 多个可以用数组
    parserOptions: {
        ecmaVersion: 8,
        sourceType: "module",
    },
    rules: {
        //http://eslint.cn/docs/rules/
        //参数：0 关闭，1 警告，2 错误

        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',

        //Possible Errors
        'for-direction': 2, //保持 for 循环计数方向正确
        'no-await-in-loop': 1, //禁止在循环中使用 await
        'no-extra-parens': 0, //禁止不必要的括号()

        //Best Practices
        'accessor-pairs': 2, //强制 getter 和 setter 在对象中成对出现
        'array-callback-return': 0, //强制数组方法的回调函数中有 return 语句
        'block-scoped-var': 2, //强制把变量的使用限制在其定义的作用域范围内
        'class-methods-use-this': 0, //强制 class 中方法使用 this
        complexity: [0, 20], //允许的最大环路复杂度
        'default-case': 0, //要求 switch 语句中有 default 分支
        'dot-location': [1, 'property'], //强制在点号之前和之后一致的换行
        eqeqeq: 0, //要求使用 === 和 !==
        'no-alert': 2, //禁用 alert、confirm 和 prompt
        'no-caller': 2, //禁用 arguments.caller 或 arguments.callee
        'no-empty-function': 0, //禁止出现空函数,
        'no-eq-null': 2, //禁止在没有类型检查操作符的情况下与 null 进行比较
        'no-eval': 1, //禁用 eval()
        'no-extra-bind': 2, //禁止不必要的 .bind() 调用
        'no-extra-label': 2, //禁用不必要的标签
        'no-floating-decimal': 2, //禁止数字字面量中使用前导和末尾小数点
        'no-implicit-globals': 2, //禁止在全局范围内使用变量声明和 function 声明
        'no-implied-eval': 2, //禁止使用类似 eval() 的方法
        'no-invalid-this': 0, //禁止 this 关键字出现在类和类对象之外
        'no-iterator': 2, //禁用 __iterator__ 属性
        'no-lone-blocks': 2, //禁用不必要的嵌套块
        'no-loop-func': 0, //禁止在循环中出现 function 声明和表达式
        'no-multi-spaces': [
            1,
            {
                exceptions: {
                    VariableDeclarator: true
                }
            }
        ], //禁止使用多个空格
        'no-multi-str': 2, //禁止使用多行字符串
        'no-new': 0, //禁止使用 new 关键字调用构造函数但却不将结果赋值给一个变量
        'no-new-func': 2, //禁止对 Function 对象使用 new 操作符
        'no-new-wrappers': 2, //禁止对 String，Number 和 Boolean 使用 new 操作符
        'no-param-reassign': 0, //禁止对 function 的参数进行重新赋值
        'no-proto': 2, //禁用 __proto__ 属性
        'no-return-assign': 2, //禁止在 return 语句中使用赋值语句
        'no-return-await': 2, //禁止使用没有意义的 return await
        'no-script-url': 1, //禁止使用 javascript: url
        'no-self-compare': 2, //禁止自身比较
        'no-sequences': 2, //禁用逗号操作符
        'no-throw-literal': 2, //禁止抛出异常字面量
        'no-unmodified-loop-condition': 2, //禁用一成不变的循环条件
        'no-useless-concat': 2, //禁止不必要的字符串字面量或模板字面量的连接
        'no-useless-return': 2, //禁止多余的 return
        'require-await': 1, //禁止不包含 await 的 async 函数
        yoda: 2, //要求或禁止 “Yoda” 条件

        //Variables
        'no-label-var': 2, //不允许标签与变量同名
        'no-shadow': ['error', { allow: ['state', 'config'] }], //禁止变量声明与外层作用域的变量同名（允许state、config）
        'no-shadow-restricted-names': 2, //禁止将标识符定义为受限的名字
        'no-undef': 1, //禁用未声明的变量，除非它们在 /*global */ 注释中被提到
        'no-undef-init': 1, //不允许初始化变量值为 undefined
        'no-undefined': 0, //禁止将 undefined 作为标识符
        'no-unused-vars': [
            1,
            { vars: 'all', args: 'after-used', ignoreRestSiblings: true }
        ], //
        'no-use-before-define': [
            1,
            {
                functions: false,
                classes: false
            }
        ], //禁止在变量定义之前使用它们
        //Node.js and CommonJS

        //Stylistic Issues
        'array-bracket-spacing': 1, //强制数组方括号中使用一致的空格
        'block-spacing': 1, //强制在单行代码块中使用一致的空格
        'brace-style': 1, //强制在代码块中使用一致的大括号风格
        camelcase: 0, //强制使用驼峰法命名约定
        'comma-dangle': 2, //要求或禁止末尾逗号
        'comma-spacing': 1, //强制在逗号前后使用一致的空格
        'comma-style': 2, //强制使用一致的逗号风格
        'computed-property-spacing': 1, //强制在计算的属性的方括号中使用一致的空格
        'consistent-this': [0, 'self', 'context'], //当获取当前执行环境的上下文时，强制使用一致的命名
        'eol-last': 1, //要求或禁止文件末尾存在空行
        'func-call-spacing': 1, //要求或禁止函数名和调用符之间的空格
        'func-name-matching': 1, //要求函数名和其被赋值的变量相匹配
        'func-names': 0, //要求或禁止使用命名的 function 表达式
        'func-style': 0, //强制一致地使用 function 声明或表达式
        'id-blacklist': [0], //禁用指定的标识符
        'id-length': [
            0,
            {
                min: 2
            }
        ], //强制标识符的最大和最小长度
        'id-match': [0], //要求标识符匹配一个指定的正则表达式
        indent: [1, 4], //4空格缩进
        'keyword-spacing': 1, //强制在关键字前后使用一致的空格
        'linebreak-style': [0, 'unix'], //强制使用一致的换行风格
        'max-depth': [
            1,
            {
                max: 10
            }
        ], //强制可嵌套的块的最大深度
        'max-len': [0], //强制一行的最大长度
        'max-nested-callbacks': [
            1,
            {
                max: 5
            }
        ], //强制回调函数最大嵌套深度
        'new-cap': 1, //要求构造函数首字母大写
        'new-parens': 1, //要求调用无参构造函数时有圆括号
        'no-lonely-if': 0, //禁止 if 作为唯一的语句出现在 else 语句中
        'no-mixed-operators': 0, //禁止混合使用不同的操作符
        'no-multi-assign': 2, //禁止使用链接赋值
        'no-multiple-empty-lines': 1, //禁止出现多行空行
        'no-negated-condition': 0, //禁用否定的表达式
        'no-new-object': 1, //禁用 Object 的构造对象
        'no-trailing-spaces': 1, //禁用行尾空格
        'no-whitespace-before-property': 2, //禁止属性前有空白
        'object-curly-newline': 0, //强制大括号内换行符的一致性
        'object-curly-spacing': [1, 'always'], //强制在大括号中使用一致的空格
        'operator-linebreak': [0, 'before'], //强制操作符使用一致的换行符
        'padded-blocks': [0, 'never'], //要求或禁止块内填充
        quotes: 0, //建议使用单引号
        semi: [1, 'always'], //使用分号代替 ASI
        'semi-spacing': 1, //强制分号之前和之后使用一致的空格
        'semi-style': 1, //强制分号的位置
        'space-before-blocks': 1, //强制在块之前使用一致的空格
        'space-before-function-paren': [1, 'never'], //强制在 function的左括号之前使用一致的空格
        'space-in-parens': 1, //强制在圆括号内使用一致的空格
        'space-infix-ops': 1, //要求操作符周围有空格
        'space-unary-ops': 1, //强制在一元操作符前后使用一致的空格
        'unicode-bom': 2, //要求或禁止 Unicode 字节顺序标记 (BOM)
        'wrap-regex': 0, //要求正则表达式被括号括起来

        //ECMAScript 6
        'arrow-spacing': 1, //强制箭头函数的箭头前后使用一致的空格
        'generator-star-spacing': [1, 'after'], //强制 generator 函数中 * 号周围使用一致的空格

        'no-empty': 1, // 禁止出现空语句块
        'no-useless-escape': 1 // 禁用不必要的转义字符
    }
};
