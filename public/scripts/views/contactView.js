'use strict';

(function(module){
    const contactView = {};
    contactView.init = function() {
        $('#contact').empty();
        $('body').css('background', 'red');
        $('#content').text('welcome to my contact page');

        $.getJSON('./scripts/model/contact.json')
            .then(data => {
                console.log('our contact JSON data:', data);

                data.forEach(contact => {
                    var li = document.createElement('li');
                    li.innerHTML = `${contact.name} has an id of ${conatact.id} and their favorite number is ${contact.fav_num}. Are they a ninja? ${contact.ninja}!`;

                    $('#contacts').append(li);
                });
        
        })
    }
    module.contactView = contactView;
})(window);