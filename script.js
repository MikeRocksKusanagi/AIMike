// AUTO SLIDESHOW (Home Page)
let autoIndex = 0;
function showAutoSlides() {
    let slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) slides[i].style.display = "none";
    autoIndex++;
    if (autoIndex > slides.length) autoIndex = 1;
    if (slides.length > 0) {
        slides[autoIndex-1].style.display = "block";
        setTimeout(showAutoSlides, 3000);
    }
}
showAutoSlides();

// MANUAL SLIDESHOW (Photography Page)
let manualIndex = 1;
function showManualSlides(n) {
    let slides = document.getElementsByClassName("manualSlide");
    if (slides.length === 0) return;
    if (n > slides.length) manualIndex = 1;
    if (n < 1) manualIndex = slides.length;
    for (let i = 0; i < slides.length; i++) slides[i].style.display = "none";
    slides[manualIndex-1].style.display = "block";
}
function changeSlide(n) { showManualSlides(manualIndex += n); }
showManualSlides(manualIndex);