const animeQuote= document.getElementById('quote')
const rdmButton=document.getElementById('press')
const animeCharacter= document.getElementById('name')
const copyBtn = document.getElementById('copy')
const playBtn = document.getElementById('play')


function rdmAnime(){
    rdmButton.innerText= "Loading Quote ..."
// Used a GET method to get data from my public API    
    fetch('https://animechan.vercel.app/api/random')
        .then(res => res.json())
        .then(data => { 
            animeQuote.innerText = data.quote
            animeCharacter.innerText=data.character
            rdmButton.innerText= "New Quote ..."
        })
       

}
// Play quote function button 
playBtn.addEventListener('click', () =>{
    let words= new SpeechSynthesisUtterance(`${animeQuote.innerText} by ${animeCharacter.innerText}`)
    speechSynthesis.speak(words);

})
// Copy quote function button
copyBtn.addEventListener('click', ()=>{
    navigator.clipboard.writeText(animeQuote.innerText)



})

rdmButton.addEventListener('click',rdmAnime)

