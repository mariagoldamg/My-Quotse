const btn = document.querySelector (`#btn`);
const par = document.querySelector (`#par`);

const quotes = [
    `No one can make you feel inferior without your consent.

    Eleanor Roosevelt`,`Be a first rate version of yourself, not a second rate version of someone else.

    Judy Garland`, `If you are always trying to be normal, you’ll never know how amazing you can be.

    Maya Angelou`, `Beautiful people are not always good but good people are always beautiful.

    Imam Ali`, `Imperfections are beauty, madness is genius, and it’s better to be absolutely ridiculous than absolutely boring.

    Marilyn Monroe`, `A girl should be two things: who and what she wants.

    Coco Chanel`
]

btn.addEventListener (`click`, ()=>{
    let randomeQuote =quotes [Math.floor(Math.random()*quotes.length)];
    par.style.display = `block`;
    par.textContent = randomeQuote;
})