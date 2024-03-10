document.getElementById("open-modal-left").addEventListener("click", function () {
    // Redirect to the desired website
    window.location.href = "https://notes-love.netlify.app/"; // Replace "https://example.com" with the URL you want to redirect to
  });

    // Event listener for right message button
    document.getElementById("open-modal-right").addEventListener("click", function () {
    // Redirect to the desired website
    window.location.href = "https://heart-repo.netlify.app/"; 
  });

  // JavaScript to create falling hearts
  const container = document.querySelector(".falling-hearts");

  function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("falling-heart");
    heart.innerHTML = "&#10084;"; // Unicode for heart
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s"; // Randomize animation duration
    container.appendChild(heart);
    setTimeout(() => {
      heart.remove();
    }, 5000); // Remove heart after 5 seconds
  }

  setInterval(createHeart, 200);