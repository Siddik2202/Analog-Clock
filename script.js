//   For Making a clock logic so it moving on circularwise.

const deg =6;
const hour = document.querySelector(".hour");
const min = document.querySelector(".min");
const sec = document.querySelector(".sec");

// To set the time angel.
const setClock = () =>{
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;


    hour.style.transform = `rotateZ(${hh + mm / 12}deg)`;
    min.style.transform = `rotateZ(${mm}deg)`;
    sec.style.transform = `rotateZ(${ss}deg)`;
};

setClock();
setInterval(setClock,1000);



//  For changing color of body 
const ModeBtnOne = document.querySelector('.btn');
 

// Where you click Btn One It will be dark body.
ModeBtnOne.addEventListener('click', () => {
     document.body.style.background = '#333';
});


// Where you click Btn One It will be light color body.
const modeBtnTwo = document.querySelector('.btn2');
modeBtnTwo.addEventListener('click', () => {
    document.body.style.background = '#fff';
});
 
 
// Created by Abu Bakkar Siddik
 