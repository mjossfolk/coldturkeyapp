/*Add dot-nav functionality*/
$(document).ready(function(){
    $('.awesome-tooltip').tooltip({
        placement: 'left'
    });   

    $(window).bind('scroll',function(e){
      dotnavigation();
    });
    
    function dotnavigation(){
             
        var numSections = $('section').length;
        
        $('#dot-nav li a').removeClass('active').parent('li').removeClass('active');     
        $('section').each(function(i,item){
          var ele = $(item), nextTop;
          
          console.log(ele.next().html());
          
          if (typeof ele.next().offset() != "undefined") {
            nextTop = ele.next().offset().top;
          }
          else {
            nextTop = $(document).height();
          }
          
          if (ele.offset() !== null) {
            thisTop = ele.offset().top - ((nextTop - ele.offset().top) / numSections);
          }
          else {
            thisTop = 0;
          }
          
          var docTop = $(document).scrollTop();
          
          if(docTop >= thisTop && (docTop < nextTop)){
            $('#dot-nav li').eq(i).addClass('active');
          }
        });   
    }

    /* get click-function working on dot-nav*/
    $('#dot-nav li').click(function(){
      
        var id = $(this).find('a').attr("href"),
          posi,
          ele,
          padding = -12;
      
        ele = $(id);
        posi = ($(ele).offset()||0).top - padding;
      
        $('html, body').animate({scrollTop:posi}, 'slow');
      
        return false;
    });

});/* end dot nav */


/* Make navbar fade in on scroll*/
$(document).ready(function(){                    
    $(window).scroll(function(){                          
        if ($(this).scrollTop() > 500) {
            $('.navbar').fadeIn(200);
        } else {
            $('.navbar').fadeOut(200);
        } 
    });
});/* end of fade in function*/



// /*Scroll back to top on page refresh*/
// $(document).ready(function(){
//     $('html').animate({scrollTop:0}, 1);
//     $('body').animate({scrollTop:0}, 1);
// });/*end of refresh function*/



// /*Scroll back to top on page refresh*/
$(window).on('beforeunload', function(){
    $(window).scrollTop(0);
});





