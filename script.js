$(() => {
    let pos = 0;

    let preloader = $('.preloader');

    let progress1 = $('#progress1');

    let t = setInterval(() => {

        if( pos > 121 ){
            preloader.css({
                'display' : 'none',
            });
        }

        else{
            progress1.val(pos++);
        }

    }, 100)
})

// alert(innerWidth)


//Change time

function myTime(){

    let time = $('#time')

    let currentDate = new Date();

    let hour = currentDate.getHours();

    if(hour >=12 && hour < 17 ){
        time = time.text('afternoon')
    }

    else if( hour >= 17){
        time = time.text('evening')
    }

    else{
        time = time.text('morning')
    }
}

myTime();

//Typedjs

var typed = new Typed('.auto', {
    strings : ['Software and Hardware engineer.', 'Programmer.', 'Tech Geek.', 'Lover of AI.'],
    typeSpeed : 100,
    backSpeed : 100,
    loop : true,
});

//dot

let dot = document.querySelector('.dot');

let pre = 0;

let arr = '....';

let t = setInterval(() => {

    if( pre >= arr.length){
        pre = 0;
    }

    else{
       
        dot.innerHTML = arr.slice(0,pre);

        pre++;
    }
}, 500);