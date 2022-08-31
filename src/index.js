import './style.css';
import {getPost} from "./modules/get";
import {addPost} from "./modules/post";

// When you click on submit button.
document.querySelector(".submit").addEventListener("click",(e)=>{
  e.preventDefault();
  addPost();
  user_name.value = '';
  user_score.value = '';
  //Set timeout when refreshed.
})

// Add event listener to the refresh button.
document.querySelector(".refresh").addEventListener("click",()=>{
  getPost();
});
  //When the user loads the window. 
  window.addEventListener('load', () => {
    getData();
  });
