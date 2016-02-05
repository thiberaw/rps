/**
 * Created by thibaut on 22/10/14.
 */
var rps = (function(){
    'use strict';

    var rps_tab = document.getElementsByClassName('rps_choice'),
        rps_cpChoice = document.getElementById('rps_cp-choice'),
        rps_userScore = document.getElementById('rps_user-score'),
        rps_cpScore = document.getElementById('rps_cp-score'),
        rps_class = ['rps_rock','rps_paper','rps_scissors'],
        justify_content = ['flex-start', 'center', 'flex-end'];

    var getCpScore = function (){
        return Math.floor(Math.random() * (4 - 1)) + 1;
    }

    var getResult = function (idx, cp_num){
        return ( idx + 1 ) - cp_num;
    }

    var classMatch = function (elem, cName){
        if(elem.className === cName){
            return true;
        }
        return false;
    }

    var getWinner = function (res, callB){
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

    var writeScore = function (winner){
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

    var playGame = function (idx){
        var cp_num = getCpScore();
        var cp_class = rps_class[cp_num - 1];
        var result = getResult(idx, cp_num);
        
        rps_cpChoice.style = 'justify-content:' + justify_content[idx];
        rps_cpChoice.firstChild.className = 'rps_choice ' + cp_class + ' rps_cp';
        rps_cpChoice.firstChild.innerText = cp_num === 3 ? '||' : '';

        getWinner(result, writeScore);
    }

    var rpsPlay = function () {
        Array.prototype.forEach.call(rps_tab, function(elem, idx, arr){
            elem.addEventListener('click', function(){
                playGame(idx)
            }, false);
        });
    }

    return {
        rpsPlay: rpsPlay
    }
 }());

rps.rpsPlay();
