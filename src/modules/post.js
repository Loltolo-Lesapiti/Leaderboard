export const userName = document.querySelector('.name');
export const userScore = document.querySelector('.score');
const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/wTWLt5kL1D7bko98XSeZ/scores/';
// A function to setData.
const addPost = async () => {
  await fetch(url, {
    method: 'POST',
    body: JSON.stringify({ user: userName.value, score: userScore.value }),
    headers: { 'Content-type': 'application/JSON' },
  });
};
export default addPost;