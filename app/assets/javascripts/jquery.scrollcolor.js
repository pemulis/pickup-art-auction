$(document).ready(function(){       
    var scroll_pos = 0;
    $(document).scroll(function() { 
        scroll_pos = $(this).scrollTop();
        if(scroll_pos > 150) {
            $("body").addClass('second_bg_image');
        } else {
            $("body").removeClass('second_bg_image');
        }
    });
});
