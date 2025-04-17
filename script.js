const imagePaths = [
    "images/img1.jpg",
    "images/img2.jpg",
    "images/img3.jpg"
  ];
  
  let currentIndex = 0;
  const imageElement = document.getElementById("mainImage");
  const button = document.getElementById("nextButton");
  
  button.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % imagePaths.length;
    imageElement.src = imagePaths[currentIndex];
  });
  