let butt  = document.querySelector('button');
let h4 = document.querySelector('h4');
let check = 0 ;
butt.addEventListener('click',function(){
    h4.innerHTML = 'Processing...'
    setTimeout(function(){
        if(check==0){
            h4.innerHTML = 'Friends';
            h4.style.color = 'green';
            butt.innerHTML = 'unfriend';
            check++;
         }
        else {
            h4.innerHTML = 'Stranger';
            h4.style.color = 'red';
            butt.innerHTML = 'Add Friend';
            check--;
        }
    },2000)
})