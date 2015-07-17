/**
 * Created by thibaut on 22/10/14.
 */
 (function(){
    'use strict';

    var rps_tab     = document.getElementsByClassName('rps_choice'),
        cp_choice   = document.getElementById('cp_choice'),
        count_box   = document.getElementById('count_box');

    var rps = {
        getRandInt: function() {

            return Math.floor(Math.random() * (3 - 1)) + 1;

        },
        getResult: function(result){

            if(result === '12' || result === '23' || result === '31'){
                count_box.innerText = 'lost';
            }else if(result === '13' || result === '21' || result === '32'){
                count_box.innerText = 'win';
            }else{
                count_box.innerText = 'tie game';
            }

        },
        setRpsClass: function(elem,num){

            var rps_class   = ['rps_rock_cp','rps_paper_cp','rps_scissors_cp'];

            elem.className = 'rps_choice '+rps_class[num-1];

        }
    };

    Array.prototype.forEach.call(rps_tab, function(elem, idx, arr){

        elem.addEventListener('click', function(){

            var cp_num = rps.getRandInt();
            var user_choice = idx + 1;

            var result = user_choice + '' +cp_num;

            rps.setRpsClass(cp_choice, cp_num)
            rps.getResult(result);

        }, false);

    });

 }());



