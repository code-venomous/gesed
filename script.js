let listVideo = document.querySelectorAll('.video-list .vid');
let mainVideo = document.querySelector('.main-video video')
let title = document.querySelector('.main-video .title')
let descriptionBox = document.querySelector('.description-box');

window.addEventListener('DOMContentLoaded', () => {
  const loadingScreen = document.querySelector('.loading-screen');
  loadingScreen.style.display = 'block';

  // Hide the loading screen after a brief delay to ensure content is visible
  setTimeout(() => {
      loadingScreen.style.display = 'none';
  }, 1500); // Adjust the delay as needed
});




listVideo.forEach(video =>{
  video.onclick = () => {
    listVideo.forEach(vid => vid.classList.remove('active'));
    video.classList.add('active');
    if(video.classList.contains('active')){
      let src = video.children[0].getAttribute('src')
      mainVideo.src = src;
      let text = video.children[1].innerHTML;
      title.innerHTML = text;
      descriptionBox.textContent = video.querySelector('.video-description').textContent;
      descriptionBox.style.display = 'block';
    }
  }
} )


