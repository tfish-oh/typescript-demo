const merge=require('webpack-merge')
const baseConfig=require('./webpack.base.config')
const proConfig=require('./webpack.pro.config')
const devConfig=require('./webpack.dev.config')

let config=process.env.NODE_ENV=='development'?devConfig:proConfig
console.log(merge(baseConfig,config))
module.exports=merge(baseConfig,config)