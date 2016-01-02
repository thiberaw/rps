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

    function classMatch(elem, cName){
        if(elem.className === cName){
            return true;
        }
        return false;
    }

    function writeUserScore(res){
        if(res === 'win'){
            var elemArrLength = rps_score.childElementCount - 1;
            var lastElement = rps_score.children[elemArrLength];
            if(classMatch(lastElement, 'fiveBars')){
                rps_score.innerHTML += '<span>|</span>';
            } else {
                if(lastElement.innerText === '||||'){
                    lastElement.className = 'fiveBars';
                }else{
                    lastElement.innerText += '|';
                }       
            }
        }
    }

    function playGame(idx){
        var cp_num = setCpScore();
        var result = displayResult(idx, cp_num); 

        cp_choice.className = 'rps_choice ' + rps_class[cp_num - 1];
        count_box.innerText = result; 
        writeUserScore(result);

    }

    Array.prototype.forEach.call(rps_tab, function(elem, idx, arr){
        elem.addEventListener('click', function(){
            playGame(idx)
        }, false);
    });

 }());
