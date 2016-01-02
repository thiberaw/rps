/**
 * Created by thibaut on 22/10/14.
 */
(function(){
    'use strict';

    var rps_tab     = document.getElementsByClassName('rps_choice'),
        cp_choice   = document.getElementById('cp_choice'),
        count_box   = document.getElementById('count_box'),
        rps_score   = document.getElementById('rps_score'),
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

    function setCpScore(){
        return Math.floor(Math.random() * (4 - 1)) + 1;
    }

    function displayResult(idx, cp_num){
        var res = ( idx + 1 ) + '' + cp_num;
        return results[res];
    }

    function playGame(idx){
        var cp_num = setCpScore();

        cp_choice.className = 'rps_choice ' + rps_class[cp_num - 1];
        count_box.innerText = displayResult(idx, cp_num); 
    }

    Array.prototype.forEach.call(rps_tab, function(elem, idx, arr){
        elem.addEventListener('click', function(){
            playGame(idx)
        }, false);
    });

 }());
