'use strict';

(function(module) {
    const aboutView = {};

    aboutView.init = function() {
        $('#contacts').empty();
        $('body').css('background', 'orange');
        $('#content').text('welcome');
    }

    module.aboutView = aboutView;
})(window);