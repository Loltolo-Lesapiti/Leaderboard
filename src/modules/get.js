// A function to get data.
const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/wTWLt5kL1D7bko98XSeZ/scores/';

const getPost = async () => {
  await fetch(url)
    .then((res) => res.json())
    .then((data) => {
      if (!data) {
        return;
      }
      const sortScore = data.result.sort((a, b) => b.score - a.score);
      const results = document.querySelector('ul');
      sortScore.forEach((game, index) => {
        const li = document.createElement('li');
        if(index===0){
        li.innerHTML = `<div class="circle">${index+1}</div><h2>${game.user}</h2>
        <div class="rank">
        <h4>${game.score}</h4>
        <i class="fa fa-trophy icon-large" aria-hidden="true"></i>
        <i class="fa fa-trophy icon-large" aria-hidden="true"></i>
        <i class="fa fa-trophy icon-large" aria-hidden="true"></i>
        </div>`;
        }else if(index===1){
          li.innerHTML = `<div class="circle">${index+1}</div><h2>${game.user}</h2>
          <div class="rank">
          <h4>${game.score}</h4>
          <i class="fa fa-trophy icon-large" aria-hidden="true"></i>
          <i class="fa fa-trophy icon-large" aria-hidden="true"></i>
          </div>`;
        }else if(index==2){
          li.innerHTML = `<div class="circle">${index+1}</div><h2>${game.user}</h2>
          <div class="rank">
          <h4>${game.score}</h4>
          <i class="fa fa-trophy icon-large" aria-hidden="true"></i>
          </div>`;
        }else{
          li.innerHTML = `<div class="circle">${index+1}</div><h2>${game.user}</h2>
          <div class="rank">
          <h4>${game.score}</h4>
          </div>`;
        }
        container.appendChild(li);
      });
      if (container.offsetHeight >= 200) {
          container.classList.add('overflow');
      } else {
        container.classList.remove('overflow');
      }
    });
};
export default getPost;