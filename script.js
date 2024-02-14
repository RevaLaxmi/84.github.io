document.addEventListener("DOMContentLoaded", function () {
  const images = ["heart1.png", "heart2.png", "heart3.png", "heart4.png", "heart5.png"];
  const imageElement = document.getElementById("image");
  const textElement = document.getElementById("text");
  let currentIndex = 0;

  function loadImage() {
    if (currentIndex < images.length) {
      imageElement.src = images[currentIndex];
      currentIndex++;
      setTimeout(loadImage, 1000); // Change delay (in milliseconds) here
    }
  }

  function typeText(text, index = 0) {
    if (index < text.length) {
      textElement.textContent += text[index];
      index++;
      setTimeout(() => typeText(text, index), 100); // Typing speed (in milliseconds)
    } else {
      textElement.style.opacity = 1;
    }
  }

  loadImage();
  typeText("You’re the best part of my life");
});




