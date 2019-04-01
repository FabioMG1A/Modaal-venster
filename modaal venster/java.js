jQuery(function($) {
  
    // Set dynamic width and height by data-attr element
    $('.modaal').each(function() {
      var width = $(this).attr('data-width');
      var height = $(this).attr('data-height');
      $(this).find('.modaal-inner').width(width).height(height);
    });
    
    // Open modal on click
    $('#myBtn').click(function(){
      // Toggle modal
      $('.modaal').fadeToggle(200);
    });
    
    $('<div class="verlaat"></div>').appendTo('body');
    
    // modaal sluiten met klik
    $('.modaal, .modaal-sluit').click(function(){
      $('.modaal').fadeToggle(200);
      $('.verlaat').hide();
      Cookies.set('closedModal', 'true', { expires: 7 });
      
    }).children().click(function(e) {
      return false;
    });
      
    var closedModal = Cookies.get('closedModal');
    if(closedModal != 'true'){
      $('.verlaat').mouseenter(function(){
        $('.modaal').fadeToggle(200);
      });
    } else {
      $('.verlaat').hide();
    }  
    
  });