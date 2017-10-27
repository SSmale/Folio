$(function () {

  var split = location.search.replace('?', '').split('=')

  if (split[1]) {
    $('.site').addClass('element').find('.contact').addClass('open').find('.thanks-msg').addClass('open')

    function msg() {
      $('.thanks-msg').removeClass('open');
    }
    window.setTimeout(msg, 4000);
  }

  $(".icon-container").click(function () {

    var $this = $(this);
    var $tbl = $this.data('area');

    if (window.matchMedia('(max-width: 1200px)').matches) {

      if ($this.children().hasClass('active')) {
        loadElement($tbl);

      } else {
        $(".circle").removeClass('active');
        $this.find(".circle").toggleClass('active');
      }
    } else {
      scroll($('.' + $tbl));
    }

  });
});

$('.project-container').click(function () {

  $(".feature").removeClass('feature');
  $(this).toggleClass('feature');
  if ((window.matchMedia('(min-width: 768px)').matches) && (window.matchMedia('(max-width: 1200px)').matches)) {
    scroll($('.feature'));
  }
});

$("svg").click(function () {

  var $this = $(this);

  $('.site').removeClass('element');

  $('.open').removeClass('open');

  $('.active').removeClass('active');
});


function loadElement($tbl) {

  $('.site').addClass('element');

  $('.' + $tbl).addClass('open');

}

function scroll(scrollTo) {
  $('html,body').animate({
    scrollTop: scrollTo.offset().top
  }, 'slow');
}

$(".accordian .item").click(function () {

  var $this = $(this);
  var height = $this.find('p').height();

  if ($this.hasClass('open')) {
    $this.toggleClass('open').removeClass('open').children('.body').css("max-height", "0px");

  } else {
    $(".accordian .item").removeClass('open').children('.body').css("max-height", "0px");
    $this.toggleClass('open').children('.body').css("max-height", (height + 15) + "px");
  }
});