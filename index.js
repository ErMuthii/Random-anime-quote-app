const animeQuote= document.getElementById('quote')
const rdmButton=document.getElementById('press')
const animeCharacter= document.getElementById('name')


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

rdmButton.addEventListener('click',rdmAnime)

