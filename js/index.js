$(document).ready(function(){
  var nav = $('.nav-btn');
  var menu = $('.menu li');
  
  var act = false;
  
  $(nav).on('click',function(){
    $(menu).each(function(i,mm){  
      if(!act){ 
        $(this).stop().animate({ opacity:1 },400*i);
        $(nav).find('span').fadeOut( 'easeInQuint' );
        $('.m-icon').stop().animate({ top:'50%' },'easeInOutCubic').addClass('clicked-btn');
      }
      else {
        $(this).stop().animate({ opacity:0 },400*i);
        $(nav).find('span').fadeIn( 'easeInQuint' );        
        $('.m-icon').stop().animate({ top:'30px' },'easeInOutCubic').removeClass('clicked-btn');
      } 
    });
    act = !act; 
  });
  
//   var active1 = false;
//   var active2 = false;
//   var active3 = false;
//   var active4 = false;

//     $(nav).on('click',function(){
//      if(!active1) $('li:nth-child(1)').animate({ top:'-10%',opacity:1 },200);
//       else $('li:nth-child(1)').animate({ top:'50%',opacity:0 },200);
//      if(!active2) $('li:nth-child(2)').animate({ left:'130%',opacity:1 },400);
//       else $('li:nth-child(2)').animate({ left:'50%',opacity:0 },400);
//      if(!active3) $('li:nth-child(3)').animate({ top:'110%',opacity:1 },600);
//       else $('li:nth-child(3)').animate({ top:'50%',opacity:0 },600);
//      if(!active4) $('li:nth-child(4)').animate({ left:'-30%',opacity:1 },800);
//       else $('li:nth-child(4)').animate({ left:'50%',opacity:0 },800);
      
//      active1 = !active1;
//      active2 = !active2;
//      active3 = !active3;
//      active4 = !active4;
//    });
    
});