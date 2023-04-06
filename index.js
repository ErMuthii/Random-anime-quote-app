const animeQuote= document.getElementById('quote')
const rdmButton=document.getElementById('press')
const animeCharacter= document.getElementById('name')
const copyBtn = document.getElementById('copy')
const playBtn = document.getElementById('play')


function rdmAnime(){
    rdmButton.innerText= "Loading Quote ..."
    
    fetch('https://animechan.vercel.app/api/random')
        .then(res => res.json())
        .then(data => { 
            animeQuote.innerText = data.quote
            animeCharacter.innerText=data.character
            rdmButton.innerText= "New Quote ..."
        })
       

}

playBtn.addEventListener('click', () =>{
    let words= new SpeechSynthesisUtterance(`${animeQuote.innerText} by ${animeCharacter.innerText}`)
    speechSynthesis.speak(words);

})

rdmButton.addEventListener('click',rdmAnime)

