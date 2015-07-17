/**
 * Created by thibaut on 22/10/14.
 */
 (function(){
    'use strict';

    var rps_tab     = document.getElementsByClassName('rps_choice'),
        cp_choice   = document.getElementById('cp_choice'),
        count_box   = document.getElementById('count_box'),
        rps_class   = ['rps_rock_cp','rps_paper_cp','rps_scissors_cp'],
        results = {
            '12' : 'lost',
            '23' : 'lost',
            '31' : 'lost',
            '11' : 'draw',
            '22' : 'draw',
            '33' : 'draw',
            '13' : 'win',
            '21' : 'win',
            '32' : 'win'
    };

    Array.prototype.forEach.call(rps_tab, function(elem, idx, arr){

        elem.addEventListener('click', function(){

            var cp_num = Math.floor(Math.random() * (4 - 1)) + 1;

            var result = ( idx + 1 ) + '' + cp_num;

            cp_choice.className = 'rps_choice ' + rps_class[cp_num - 1];
            count_box.innerText = results[result];

        }, false);

    });

 }());
