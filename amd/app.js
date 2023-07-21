requirejs.config({
  baseUrl: './app',
  paths: {
    app: '../app',
    jquery: '../../vendor/jquery/dist/jquery.min'
  }
})

requirejs(['app/main'])