const path= require('path');                      
module.exports={
mode:"development" || production || testing ,
entry:"./src/index.js",                    
output:{
path:path.resolve(__dirname,'docs'),
filename:'output.js'                                  
},
module:{
rules:[
    {
   test:/\.css$/,
   use:[                                        
             'style-loader',
             'css-loader'
       ]
    },
    {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|avif)$/,
        use: [
          {
            loader: 'file-loader', 
            options: {
              // Specify options here
            }
          }
        ]
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'videos/[name].[hash:8].[ext]'
            }
          }
        ]
      },
      {
        test: /\.lottie$/,
        use: 'json-loader',
        type: 'javascript/auto',
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
        type: 'javascript/auto', 
    },
   
       
]
},
devServer:{
static:path.resolve(__dirname,'docs'),
compress:true,
port : 3001
}

}