'use strict';

(function(module) {
    const homeView = {};

    homeView.init = function() {
        $('#contacts').empty();
        $('body').css('background', 'green');
        $('#content').text('hi, welcome to the homepage');
        helper();
    }

    function helper() {
        console.log('im a helper function not directly visible to the window unless I am called inside a function that is exposed to a window. if you enter my name \'helper\' in the console, you won\'t find me.')
    }
    
    module.homeView = homeView;
})(window);