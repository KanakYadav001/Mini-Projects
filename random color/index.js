let div = document.querySelector('div');
let button = document.querySelector('button');

button.addEventListener('click',function(){
    let a = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    let c = Math.floor(Math.random()*256);

    div.style.backgroundColor = `rgb(${a},${b},${c})`;
})