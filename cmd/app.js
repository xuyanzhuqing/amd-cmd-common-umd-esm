if (document.attachEvent) {
  alert("这个例子不支持 Old IE 哦")
}

define(function(require) {
  var data = require('./app/js/data');

  console.info(data)
});