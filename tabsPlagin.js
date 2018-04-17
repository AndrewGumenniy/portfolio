$(document).ready(function(){
$('ul[class="nav"]').find("a").click(function(){ 

  $('ul[class="nav"]').find("a").removeClass("active-menu-item");
$(this).addClass("active-menu-item");
});

$('ul[class="filter"]').find("li").click(function(){
    $('ul[class="filter"]').find("li").removeClass("active-tab");
    $(this).addClass("active-tab");
    $( "#tab:visible:nth-child(-n+3)" ).css("margin-bottom", "20px");
    
    if($(this).attr("id")=='0'){
      $(".tabs").find('div[id="tab"]').show();
    }
    else{
      var item =  $(this).attr("id");
      $(".tabs").find('div[id="tab"]').hide();
     $(".tabs").find('div[id="tab"]').filter(function(index){
        var str = $(this).attr("class");
        var words = str.split(" ");       
        for (var i=0; i<words.length; i++) {          
          if(words[i] == item){
            return words[i] == item;
          }
        }      
      }).show();
    }
});
})
$(document).ready(function(){
  $(".transitions a").click(function(event){
      event.stopPropagation();   
  });
  setStartAboutSize();

  $(window).resize(function() { 
    setStartAboutSize();
  });
function setStartAboutSize(){ 
  if ($(window).width() > 1100) {
    $(".main-img").height(($(window).height()-($('.filter-block').outerHeight()+70))/2); 
  }
}
})
