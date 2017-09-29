$(function(){
  if (window.matchMedia('(max-width: 1200px)').matches)
  {
      // do functionality on screens smaller than 768px
  
      $(".icon-container").click(function(){
        var $this = $(this);
        if ($this.children().hasClass('active')) {
          $this.find(".circle").toggleClass('active');
        } else {
          $(".circle").removeClass('active');
          $this.find(".circle").toggleClass('active');
        }
      });
    } else {
      alert("fired");
    }
});   