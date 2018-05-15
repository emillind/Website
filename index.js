let scrollDown = () => {
  var vheight = $(window).height()
  $('html, body').animate({
    scrollTop: (Math.ceil($(window).scrollTop() / vheight)+2) * vheight
  }, 2000)
}
