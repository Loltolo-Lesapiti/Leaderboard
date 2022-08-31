import './style.css';
import getPost from "./modules/get";
import addPost from "./modules/post";
import {user_name,user_score} from "./modules/post";

// When you click on submit button.
document.querySelector(".submit").addEventListener("click",(e)=>{
  e.preventDefault();
  addPost();
  user_name.value = '';
  user_score.value = '';
})

// Add event listener to the refresh button.
document.querySelector(".refresh").addEventListener("click",(e)=>{
  getPost();
})
window.addEventListener('load', () => {
  getPost();
});



