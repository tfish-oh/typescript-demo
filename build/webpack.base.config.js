const HtmlWebpackPlugin =require('html-webpack-plugin')
module.exports={
    entry:{
        app:'./src/index.ts'
    },
    output:{
        filename:'[name].js'
    },
    // resolve:{
    //     extensions:['.js','.tsx']
    // },
    module:{
        rules:[
            {
                test:/\.tsx?$/,
                use:[{loader:'ts-loader'}],
                exclude:/node-modules/
            }
    ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/tpl/index.html'
        })
    ]
}