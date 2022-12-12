    // ui containers and progressbar
let getallcontainers = document.querySelectorAll('.container');
    getmenuscreen = document.querySelector('.menu'),
    getloadingscreen = document.getElementById('loading'),
    getownprogress = document.querySelector('.own-progress');
    getownprogressbar = document.getElementById('progress-bar'),
    getchoosecontainer = document.querySelector('.choose'),
    getmoviecontainer = document.querySelector('.movies'),
    getgamecontainer = document.querySelector('.games'),
    getscorescreen = document.querySelector('.score-box');


    // ui games button
let getstartgamebtn = document.getElementsByClassName('menu-btn'),
    getgenrebtn = document.getElementsByClassName('genre-btn'),
    getbackbtn = document.querySelector('.backbtn'),
    getquest1btns = document.getElementsByClassName('quest1'),
    getquest2btns = document.getElementsByClassName('quest2'),
    getquestbtns = document.getElementsByClassName('btn'),
    gethomebtn = document.querySelector('.home-btn'),
    getlistbtn = document.querySelector('.category-btn');


// games tool
var setwidth = 0,
    currslide = 1,
    score = 0,
    containernumber =0,
    setinv;


//scorevalue and in game items list
let getmovieslists = document.querySelectorAll('.movies-list'),
    getgameslist = document.querySelectorAll('.game-lists'),
    getscoreval = document.getElementById('scoreval');


//home btn function start
    gethomebtn.addEventListener('click',function (){

        window.location.reload();

    });
//home button function end


//start game button function start
getstartgamebtn[0].addEventListener('mouseup',function(){

    // forgetmenuscreen('none');
    forscreen(getmenuscreen,'none');
    getownprogress.classList.add('loading');
    // forgetloadingscreen('block');
    forscreen(getloadingscreen,'block');
    interval();

});
    //start game button function end


// back key button function start
getbackbtn.addEventListener('click',function (){

    window.location.reload();


});
    // back key button function start



// getgenrebtn[0].addEventListener('click',function (){
//
//     // forgetchoosecontainer('none');
//     forscreen(getchoosecontainer,'none');
//     // forgetmoviecontainer('block');
//     forscreen(getmoviecontainer,'block');
//     forgetmovielists(currslide);
//
//
// });

//choosing category function start
for(let ab=0;ab<getgenrebtn.length;ab++){

    getgenrebtn[ab].addEventListener('click',function (){

        switch (getgenrebtn[ab]){

            case getgenrebtn[0]:
                // forgetchoosecontainer('none');
                forscreen(getchoosecontainer,'none');
                // forgetmoviecontainer('block');
                forscreen(getmoviecontainer,'block');
                games(getmovieslists,currslide);
                containernumber = 1;
                break;

            case getgenrebtn[1]:
                forscreen(getchoosecontainer,'none');
                forscreen(getgamecontainer,'block');
                games(getgameslist,currslide);
                containernumber = 2;
                break;
        }

    })
}
    //choosing category function end


//for game category start choosing
getlistbtn.addEventListener('click',function (){

    forscreen(getmoviecontainer,'none');
    forscreen(getchoosecontainer,'block');
    forscreen(getscorescreen,'none');
    currslide = 1;
    score = 0;

})
//for game category end choosing



//function starts for reuseable containers
function forscreen(screen,val){

    screen.style.display = val;
}


function interval(){

        setinv = setInterval(progressinc, 50);


}
//function end for reuse able containers


//function start progress or loading bar
function  progressinc(){
    if(setwidth >= 100 ){

        clearInterval(setinv);
        // forgetloadingscreen('none');
        forscreen(getloadingscreen,'none');
        // forgetchoosecontainer('block');
        forscreen(getchoosecontainer,'block');
    }
    else{
        setwidth++;
        getownprogressbar.style.width = `${setwidth}%`;
        getownprogressbar.setAttribute('inc-numb',`${setwidth}%`);
    }
}
//function end progress or loading bar



// function start games items from selected category and items slide

function games(gamelist,slide){

    for(let i=0;i<gamelist.length;i++){
        gamelist[i].style.display = 'none';
    }
    if(slide > gamelist.length){

        winlose(getallcontainers);
        getscoreval.innerText = `You get ${score}/${gamelist.length} in trivia`;
        score = 0;

    }else{
        gamelist[currslide-1].style.display = 'block';
    }



}
// function end games items from selected category and items slide


//working quest button with choosing answer start
for(let b=0;b<getquestbtns.length;b++){

    getquestbtns[b].addEventListener('click',addscoreandturn);
}
    //working quest button with choosing answer end


//function start for score screen container
function winlose(containers){
    let apk = containers;
    forscreen(getscorescreen,'flex');
    containers[containernumber].style.display='none'

}
//function end for score screen container


//function start for choosing answer
function addscoreandturn(){

    window.onclick = function (e){

        let gettarget = e.target;


        switch(true){

            case (e.target.className.includes('quest1')&& e.target.className.includes('win')):
                score++;
                currslide++;
                games(getmovieslists,currslide);
                console.log(currslide);
                break;

            case (e.target.className.includes('quest1')):
                currslide++;
                games(getmovieslists,currslide);
                break;

            case (e.target.className.includes('quest2')&& e.target.className.includes('win')):
                score++;
                currslide++;
                games(getgameslist,currslide);
                console.log(currslide);
                break;

                case (e.target.className.includes('quest2')):
                    currslide++;
                    games(getgameslist,currslide);
                    break;
        }




}

}
    //function end for choosing answer
