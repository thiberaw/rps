/**
 * Created by thibaut on 22/10/14.
 */
(function(){
    'use strict';

    var rps_tab = document.getElementsByClassName('rps_choice'),
        rps_cpChoice = document.getElementById('rps_cp-choice'),
        rps_userScore = document.getElementById('rps_user-score'),
        rps_cpScore = document.getElementById('rps_cp-score'),
        rps_class = ['rps_rock-cp','rps_paper_cp','rps_scissors_cp'],
        justify_content = ['flex-start', 'center', 'flex-end'];

    function getCpScore(){
        return Math.floor(Math.random() * (4 - 1)) + 1;
    }

    function getResult(idx, cp_num){
        return ( idx + 1 ) - cp_num;
    }

    function classMatch(elem, cName){
        if(elem.className === cName){
            return true;
        }
        return false;
    }

    function getWinner(res, callB){
        if(res !== 0){
            var winner;
            
            if(res === 1 || res === -2){
                winner = rps_userScore;
            } else {
                winner = rps_cpScore;
            }
            
            callB(winner);            
        }
    }

    function writeScore(winner){
        var lastElem = winner.lastChild;

        if(classMatch(lastElem, 'fiveBars')){
            winner.innerHTML += '<span>|</span>';
        } else {
            if(lastElem.innerText === '||||'){
                lastElem.className = 'fiveBars';
            } else {
                lastElem.innerText += '|';
            }       
        }
    }

    function playGame(idx){
        var cp_num = getCpScore();
        var cp_class = rps_class[cp_num - 1];
        var result = getResult(idx, cp_num);
        
        rps_cpChoice.style = 'justify-content:' + justify_content[idx];
        rps_cpChoice.firstChild.className = 'rps_choice ' + cp_class + ' ' + cp_class.slice(0, -3);
        getWinner(result, writeScore);

    }

    Array.prototype.forEach.call(rps_tab, function(elem, idx, arr){
        elem.addEventListener('click', function(){
            playGame(idx)
        }, false);
    });

 }());
