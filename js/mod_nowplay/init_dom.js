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
    })
})