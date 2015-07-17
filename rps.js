/**
 * Created by thibaut on 22/10/14.
 */
var rps_tab         = document.getElementsByClassName('rps_choice'),
    cp_choice       = document.getElementById('cp_choice'),
    count_box       = document.getElementById('count_box'),
    game_on         = 0,
    result_tab      = [],
    rps_time,
    cp_num;

var rps = {
    getRandInt: function(min, max) {
        cp_num = Math.floor(Math.random() * (max - min)) + min;

        rps.setRpsClass(cp_choice,cp_num);
    },
    getResult: function(result){
        var cp_win      = rps.getLocalStorage('cp_win'),
            user_win    = rps.getLocalStorage('user_win');

        if(result == 12 || result == 23 || result == 31){
            rps.setResult('lost', cp_win, cp_score, 'cp_win');
        }else if(result == 13 || result == 21 || result == 32){
            rps.setResult('win', user_win, user_score, 'user_win');
        }else{
            count_box.innerText = 'tie game';
        }

        timeout(true,false,1000);
    },
    setResult:function(text_message, winner_num, winner_score , key_storage){
        var result_text = text_message;
        winner_num++;
        rps.setLocalStorage(key_storage,winner_num);
        rps.setMark(winner_score,rps.getLocalStorage(key_storage));

        count_box.innerText = result_text;
    },
    setRpsClass: function(elem,rpsClass){
        var rps_class   = ['rps_rock_cp','rps_paper_cp','rps_scissors_cp'];

        elem.className = 'rps_choice '+rps_class[rpsClass-1];
    }
};


for(var i = 0; i < 3; i++){
    rps_tab[i].addEventListener('click',function(){
        //prevent nervous clicking
        start_rps.removeEventListener('click', startRps, false);

        if(game_on == 0){
            count_box.innerText = 'click start';

            timeout(false,true,1000);
        }else if(count == 0){
            count_box.innerText = 'too late';

            timeout(true,true,1500);
        }else if(count < 3){
            clearTimeout(rps_time);

            count_box.innerText = 'wait for "ock"';

            timeout(true,true,1500);
        }else{
            var user_num  = parseInt(this.getAttribute('data-rps'));

            result_tab.push(user_num);
            result_tab.push(cp_num);

            rps.getResult(parseInt(result_tab.join('')));

            timeout(false,true,1000);
        }
    },false);
}