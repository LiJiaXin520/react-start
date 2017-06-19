### ��Ŀ��ʼ��
- git init
    + ���������У�Ҫͨ��git�������������ǵ���Ŀ����Զ�̵�github��ȥ��
    git add .
    git commit -m"ע��"
    git push origin master Ĭ���ύ��master��֦��ȥ
- npm init -y

### �����ļ�
- .babel ��������babel; babel����Ҫ���þ����������룻�Ѳ�֧�ֵģ������֧�ֵģ�
    - Ҫʹ��babel: babel-cli babel-core
    - Ϊ�˱���es6  babel-loader(��JS�ļ���������) babel-preset-es2015(����es6)(haha(){})  babel-preset-stage-0(�õ�ǰJS�ļ�֧�ּ�ͷ���� haha=()=>{})
 babel-preset-react
- webpack.config.js ����webpack
    - webpack webpack-dev-server
- .gitignore �ڰ���Ŀ��github�����ʱ�򣬺��Ե���Щ�ļ����ϴ�

### ��ν�����������
- ��webpack -> language -> react-jsx

### С��ϰ��
1. ����Ŀ���git���Թ���Ĳֿ⣬ͬʱ����ʼ����Ŀ
    - git init
    - npm init -y
2. ��ǰ��Ŀ�ļ��Ĵ���
    - .gitignore ���Ը�github�ϴ���Щ�ļ�
    - .babelrc ���룻�Ѳ����ݵı���ɼ��ݵģ�
    - webpack.config.js  webpack������
    - REACME.md ��ǰ��Ŀ��һЩ����
    - src -> index.js  index.html
    component�ļ��У��������д�õ�һЩ���
3. ��װ��Ҫ�Ĳ��
    - babel
        npm i --save-dev
       (babel-core babel-cli) babel-loader babel-preset-es2015
        babel-preset-react babel-preset-stage-0
    - webpack
        webpack �ܱ��أ� -�� distĿ¼���Կ���
        webpack-dev-server �ܷ�������dist������
    - Ҫ����react����������
        react   react-dom
4. ��ʼ�����ļ� ������
    + .babelrc
        {
            "presets":["es2015","react","stage-0"],
            "plugins":[]
        }
    + webpack.config.js
        + ע�⣺�ڿ����׶Σ��Ȳ�Ҫѹ����������ѹ����
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
            //Ϊ��ģ�����ģ�bundle.js�Զ�����ģ��
                new HtmlWebpackPlugin({
                    template:'����index.html�����·��'
                })
            ]
        }

    + package.json
    "scripts":{
        "start":"webpack-dev-server --progress --colors --content-base dist",
        "build":"webpack --progress --colors"
    }
5. дһЩreact�Ĳ����ļ�
�Լ���װ���������Щ���������component�ļ����£�
���ѷ�װ�õ���������뵽index.js�ļ��У�
index.js��������ļ����ᱻ������ѹ����bundle.js��bundle.js�ᱻ�Զ����뵽index.html�ļ���
index.html�ļ������ڷ������£��Զ���Ⱦ��

6. react�Ļ����﷨
1. �����ļ�import ... from ''
    ```
    import React from 'react';
    import ReactDom from 'react-dom';
    ```
2. react��д������es6�ļ̳�
    class xxx extends React.Component{
        render(){
            return (
            )
        }
    }
3. ���� export default
