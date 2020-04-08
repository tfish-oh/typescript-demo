const webpack=require("webpack")
module.exports={
    devtool:'cheap-module-eval-source-map',
    mode:'development',
    devServer:{
        port:8181
    },
//     plugins:[
//         new webpack.DefinePlugin({
//             'process.env.NODE_ENV': "development"
//           })
//     ]
}