window.addEventListener('DOMContentLoaded', function() {
    const tabs = require('./modules/tabs'),
          modal = require('./module/modal'),
          timer = require('./module/timer'),
          slider = require('./module/slider'),
          forms = require('./module/forms'),
          cards = require('./module/cards'),
          calc = require('./module/calc');

    tabs();
    modal();
    timer();
    slider();
    forms();
    cards();
    calc();

});  

import $ from 'jquery';
    
const btn = $('#btn');

    console.log(btn);

    

    

    

