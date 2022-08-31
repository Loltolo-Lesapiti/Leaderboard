// A function to get data. 
const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/wTWLt5kL1D7bko98XSeZ/scores/';

const getPost=()=>{
    await fetch(url)
    .then((res)=>res.json())
    .then((data)=>{
        if(!data){
            return
        }else{
            const sortScore = data.result.sort((a, b) => b.score - a.score);
            const results= document.querySelector("ul");
            sortScore.forEach((game) => {
              const li = document.createElement('li');
              li.innerHTML = `<p>${game.user}: ${game.score}</p>`;
              results.appendChild(li);
            })
        }
    })
}