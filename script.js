let hr_hand = document.querySelector('.hour');
let min_hand = document.querySelector('.mins');
let sec_hand = document.querySelector('.secs');



setInterval(function(){

    let date = new Date();
    let hour = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();

    let x = secs*6;
    let y = mins*6;
    let z = 30 * hour + mins / 2;
    
    sec_hand.style.transform = `rotate(${x}deg)`;
    min_hand.style.transform = `rotate(${y}deg)`;
    hr_hand.style.transform = `rotate(${z}deg)`;

},1000)