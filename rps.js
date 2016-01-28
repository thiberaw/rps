/**
 * Created by thibaut on 22/10/14.
 */
(function(){
    'use strict';

    var rps_tab     = document.getElementsByClassName('rps_choice'),
        cp_choice   = document.getElementById('cp_choice'),
        rps_score   = document.getElementById('rps_score'),
        rps_score_cp= document.getElementById('rps_score_cp'),
        rps_class   = ['rps_rock_cp','rps_paper_cp','rps_scissors_cp'];

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
                winner = rps_score;
            } else {
                winner = rps_score_cp;
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
        var result = getResult(idx, cp_num); 

        cp_choice.className = 'rps_choice ' + rps_class[cp_num - 1];
        getWinner(result, writeScore);

    }

    Array.prototype.forEach.call(rps_tab, function(elem, idx, arr){
        elem.addEventListener('click', function(){
            playGame(idx)
        }, false);
    });

 }());
