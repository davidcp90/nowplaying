define(function  (require) {
    'use strict';

    var $ = require('jquery');

    $(document).ready(function  () {
    	function scrollToAnchor(target_id){
    var aTag = $(target_id);
    $('html,body').animate({scrollTop: aTag.offset().top},'slow');
}

$("#go-to-tweets").click(function(e) {
    e.preventDefault();
    e.stopPropagation();
   scrollToAnchor($(this).attr('href'));
});
$(window).on('scroll', function() {
    var y_scroll_pos = window.pageYOffset;
    var scroll_pos_test = $(document).height();
    scroll_pos_test=scroll_pos_test-500;
    if(y_scroll_pos > scroll_pos_test) {
        $('#watch-more').click();
    }
});
    })
})