document.addEventListener("DOMContentLoaded", function() {

    var currentImage = 0;
    var totalImages = 6;
    var images = document.querySelectorAll('.image-frame img');
    var previousButton = document.getElementById("previousButton");
    var nextButton = document.getElementById("nextButton");

    previousButton.addEventListener("click", function() {
        changeImage(-1);
    });

    nextButton.addEventListener("click", function() {
        changeImage(1);
    });

    function changeImage(n) {
        images[currentImage].classList.remove("active");
        currentImage = (currentImage + n + totalImages) % totalImages;
        images[currentImage].classList.add("active");
    }
});