const webpack=require('webpack');
const path =require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin');

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
                },
                {
                    test:/\.css$/,
                    use:'style-loader'
                }
            ]
        },
    plugins:[
        new HtmlWebpackPlugin({
                template:'./src/index.html'
            })
    ]

};