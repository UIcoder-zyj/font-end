module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  loaders: [
    { test: /iview.src.*?js$/, loader: 'babel' },
    { test: /\.js$/, loader: 'babel', exclude: /node_modules/ }
  ]
}
