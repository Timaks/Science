$(document).ready(function(e){

    $(".block_medical").hide();

    $('.slider_slider').slick({
      infinite: true,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: true,
      prevArrow: '<div class="arrow_slider_prev"><div class="arrow_slider_prev_p"></div></div>',
      nextArrow: '<div class="arrow_slider_next"><div class="arrow_slider_next_p"></div></div>',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            arrows: false
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
          }
        }

      ]
    });
let this_project_block_description = null;

$('.project_block_description').on('click', function(e){
    
    let project_block_description = $(this);
//    let project_block = project_block_description.parent();
 //   project_block.css("margin_bottom", "0");
    let data_num = project_block_description.data("num");    
    project_block_description.css("border", "3px solid #D15A24");
    
    $('.arrow_maket').remove();
    $(this).after(createArrow());
    

    let block_medical = $(".block_medical[data-num="+ data_num + "]")[0];

    $(block_medical).toggle();
    $('.block_medical').not(block_medical).hide();
    
    if($(block_medical).css("display") == "block"){
        $('.project_block_description').not(project_block_description).css("border", "none");
    }else{
        $('.project_block_description').css("border", "none");
    }
    
    if(this == this_project_block_description){
        $('.arrow_maket').remove();
        this_project_block_description = null;
    }else{
        this_project_block_description = this;
    }
    
    
});
        let innovation_block_descriptions = $(".innovation_block_description:gt(2)");
        innovation_block_descriptions.hide();
        

        $(".text_show").on("click", function(e){
           $(".innovation_block_description:gt(2)").slideToggle();
           let text = $(".text_show").find('.text');
           text.text(text.text() == "Скрыть" ? "Показать еще" : "Скрыть");
        });

});

function createArrow(){
    let div = document.createElement('div');
    div.classList.add("arrow_maket");
    return div;
}
