/**
 * Created by thibaut on 22/10/14.
 */
var rps_tab         = document.getElementsByClassName('rps_choice'),
    cp_choice       = document.getElementById('cp_choice'),
    count_box       = document.getElementById('count_box'),
    count           = 0,
    game_on         = 0,
    result_tab      = [],
    rps_time,
    cp_num;

var rps = {
    countTime: function(){
        var rps_word    = ['ick','ack','ock !'];

        count_box.innerText = rps_word[count];

        count++;
        rps_time = setTimeout(function(){rps.countTime();},1100);

        if(count == 3){
            clearTimeout(rps_time);

            rps.getRandInt(1,4);
            setTimeout(function(){count = 0;},300);
        }
    },
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
    },
    getLocalStorage: function(key){
        var keyStorage = localStorage.getItem(key);

        if(keyStorage != null){
            keyStorage = parseInt(keyStorage);
        }else{
            keyStorage = 0;
        }

        return keyStorage;
    },
    setLocalStorage: function(key, value){
        localStorage.setItem(key,value);
    },
    writeScore: function(elem,score){
        for(var i = 1; i <= score; i++){
            rps.setMark(elem,i);
        }
    },
    setMark: function(elem,num){
        if(num % 5 == 0 && num != 0){
            elem.innerHTML += '<span class="fifth_mark">|</span>';
        }else {
            elem.innerHTML += '|';
        }
    },
    clean: function(){
        result_tab = [];
        count = 0;
        game_on = 0;
        cp_choice.innerText = '';
        count_box.innerText = '';
    }
};

function timeout(par1,par2,timenum){
    setTimeout(function(){
        if(par1 == true){
            rps.clean();
        }
        if(par2 == true){
            start_rps.addEventListener('click', startRps, false);
        }
    },timenum);
}

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
//show scores on page load
rps.writeScore(cp_score,rps.getLocalStorage('cp_win'));
rps.writeScore(user_score,rps.getLocalStorage('user_win'));