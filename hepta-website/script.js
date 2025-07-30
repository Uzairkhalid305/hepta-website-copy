const menu = document.getElementById('menu');
const cross = document.getElementById('cross');
const links = document.getElementById('links');

menu.onclick = () => {
    links.classList.add('show');
    menu.style.display = 'none';
    cross.style.display = 'block';
};

cross.onclick = () => {
    links.classList.remove('show');
    menu.style.display = 'block';
    cross.style.display = 'none';
};

// Video popup logic for YouTube embed
const openBtn = document.getElementById("openVideoBtn");
const popup = document.getElementById("videoPopup");
const closeBtn = document.getElementById("closePopup");
const videoFrame = document.getElementById("videoFrame");
const youtubeURL = "https://www.youtube.com/embed/668nUCeBHyY?autoplay=1";

openBtn.addEventListener("click", () => {
  popup.style.display = "flex";
  videoFrame.src = youtubeURL;
});

closeBtn.addEventListener("click", () => {
  popup.style.display = "none";
  videoFrame.src = "";
});

popup.addEventListener("click", (e) => {
  if (e.target === popup) {
    popup.style.display = "none";
    videoFrame.src = "";
  }
});

// Gallery logic
const galleryImages = document.querySelectorAll('.gallery img');
const mainImg = document.getElementById('mainImg');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;

// Set initial main image
mainImg.src = galleryImages[currentIndex].src;

// Clicking main image moves to next
mainImg.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % galleryImages.length;
  mainImg.style.opacity = 0;
  setTimeout(() => {
    mainImg.src = galleryImages[currentIndex].src;
    mainImg.style.opacity = 1;
  }, 200);
});

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
  mainImg.style.opacity = 0;
  setTimeout(() => {
    mainImg.src = galleryImages[currentIndex].src;
    mainImg.style.opacity = 1;
  }, 200);
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % galleryImages.length;
  mainImg.style.opacity = 0;
  setTimeout(() => {
    mainImg.src = galleryImages[currentIndex].src;
    mainImg.style.opacity = 1;
  }, 200);
});
