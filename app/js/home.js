$(function(){
  // do functionality on screens smaller than 768px
  
  $(".icon-container").click(function(){
    
    var $this = $(this);
    var $tbl = $this.data('area');
    
    if (window.matchMedia('(max-width: 1200px)').matches)
    {

      if ($this.children().hasClass('active')) {
        //$this.find(".circle").toggleClass('active');
        
        loadElement($tbl);
        
      } else {
        $(".circle").removeClass('active');
        $this.find(".circle").toggleClass('active');
      }
    } else {
      loadElement($tbl);
    }
    
  });
});   



$("svg").click(function(){
  
  var $this = $(this);

  $('.site').removeClass('element');
  
  $('.open').removeClass('open');
  
  $('.active').removeClass('active');
});


function loadElement($tbl){
  
  console.log($tbl);

  $('.site').addClass('element');

  $('.'+$tbl).addClass('open');

}
