### 项目初始化
- git init
    + 开发过程中，要通过git工作流，把我们的项目传到远程的github上去；
    git add .
    git commit -m"注释"
    git push origin master 默认提交到master分枝上去
- npm init -y

### 配置文件
- .babel 用来配置babel; babel的主要作用就是用来编译；把不支持的，编译成支持的；
    - 要使用babel: babel-cli babel-core
    - 为了编译es6  babel-loader(让JS文件可以运行) babel-preset-es2015(编译es6)(haha(){})  babel-preset-stage-0(让当前JS文件支持箭头函数 haha=()=>{})
 babel-preset-react
- webpack.config.js 配置webpack
    - webpack webpack-dev-server
- .gitignore 在把项目用github管理的时候，忽略掉哪些文件的上传

### 如何解决报红的问题
- 在webpack -> language -> react-jsx

### 小复习：
1. 把项目变成git可以管理的仓库，同时，初始化项目
    - git init
    - npm init -y
2. 当前项目文件的创建
    - .gitignore 忽略给github上传哪些文件
    - .babelrc 编译；把不兼容的编译成兼容的；
    - webpack.config.js  webpack的配置
    - REACME.md 当前项目的一些介绍
    - src -> index.js  index.html
    component文件夹，这里放你写好的一些组件
3. 安装必要的插件
    - babel
        npm i --save-dev
       (babel-core babel-cli) babel-loader babel-preset-es2015
        babel-preset-react babel-preset-stage-0
    - webpack
        webpack 跑本地； -》 dist目录可以看到
        webpack-dev-server 跑服务器；dist看不到
    - 要进行react开发，必须
        react   react-dom
4. 开始配置文件 三大类
    + .babelrc
        {
            "presets":["es2015","react","stage-0"],
            "plugins":[]
        }
    + webpack.config.js
        + 注意：在开发阶段，先不要压缩；上线在压缩；
        module.exports={
            entry:path.resolve(__dirname,'./src/index.js'),
            output:{
                path:path.resolve(__dirname,'./dist'),
                filename:'bundle.js'
            },
            module:{
                rules:[
                    {
                        test:/\.js(x)?$/,
                        use:'babel-loader',
                        exclude:/node_modules/
                    }
                ]
            },
            plugins:[
            //为了模版服务的；bundle.js自动插入模版
                new HtmlWebpackPlugin({
                    template:'就是index.html的相对路径'
                })
            ]
        }

    + package.json
    "scripts":{
        "start":"webpack-dev-server --progress --colors --content-base dist",
        "build":"webpack --progress --colors"
    }
5. 写一些react的测试文件
自己封装的组件，这些组件都放在component文件夹下；
最后把封装好的组件，导入到index.js文件中；
index.js它是入口文件，会被编译打包压缩到bundle.js，bundle.js会被自动插入到index.html文件；
index.html文件，会在服务器下，自动渲染；

6. react的基本语法
1. 导入文件import ... from ''
    ```
    import React from 'react';
    import ReactDom from 'react-dom';
    ```
2. react的写法，用es6的继承
    class xxx extends React.Component{
        render(){
            return (
            )
        }
    }
3. 导出 export default
