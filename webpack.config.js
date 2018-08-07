module.exports = {
  mode: 'development', // makes bundle readable
  entry: './src/index.js',
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  }
};
