module.exports = {
  css: {
    loaderOptions: {
      sass: {
        sassOptions: {
          includePaths: ['./node_modules']
        }
      },
      // by default the `sass` option will apply to both syntaxes
      // because `scss` syntax is also processed by sass-loader underlyingly
      // but when configuring the `prependData` option
      // `scss` syntax requires an semicolon at the end of a statement, while `sass` syntax requires none
      // in that case, we can target the `scss` syntax separately using the `scss` option
      scss: {
        sassOptions: {
          includePaths: ['./node_modules']
        }
      },
    }
  }
}