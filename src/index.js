import './style.css';
import getPost from './modules/get';
import addPost, { userName, userScore } from './modules/post';

// When you click on submit button.
document.querySelector('.submit').addEventListener('click', (e) => {
  e.preventDefault();
  addPost();
  userName.value = '';
  userScore.value = '';
});

// Add event listener to the refresh button.
document.querySelector('.refresh').addEventListener('click', () => {
  getPost();
});
window.addEventListener('load', () => {
  getPost();
});
