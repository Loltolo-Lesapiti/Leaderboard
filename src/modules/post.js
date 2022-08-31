export const user_name=document.querySelector(".name");
export const user_score=document.querySelector(".score");
const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/wTWLt5kL1D7bko98XSeZ/scores/';
// A function to setData.
const addPost=async()=>{
    await fetch(url,{
        method: 'POST',
        body: JSON.stringify({ user: user_name.value, score: user_score.value }),
        headers: { 'Content-type': 'application/JSON' },
    })
}
export default addPost;