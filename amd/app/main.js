require(['jquery', 'utils/console'], function ($, util) {
  const { log, info } = util
  log("util.log has been loaded successfully")
  info("console.info has been loaded successfully")

  $(function () {
    log($('p'))
  })
})