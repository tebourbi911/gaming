function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
} 
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    let dropdowns = document.getElementsByClassName("dropdown-content");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
function myFunction2(){
  document.getElementById("myDropdown2").classList.toggle('show')
}
/*------------------------------------------------scroll up button----------------------*/

let calcScrollValue = () => {
  let scrollProgress = document.getElementById("progress");
  let progressValue = document.getElementById("progress-value");
  let pos = document.documentElement.scrollTop;
  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);
  if (pos > 100) {
    scrollProgress.style.display = "grid";
  } else {
    scrollProgress.style.display = "none";
  }
  scrollProgress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
  scrollProgress.style.background = `conic-gradient(#03cc65 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
};
window.onscroll = calcScrollValue;
window.onload = calcScrollValue;
/*-----------------------------------------------------------------------*/
/*---------------------------------slide show image----------------*/
        const slider = document.querySelector(".slider");
        const nextBtn = document.querySelector(".next-btn");
        const prevBtn = document.querySelector(".prev-btn");
        const slides = document.querySelectorAll(".slide");
        const slideIcons = document.querySelectorAll(".slide-icon");
        const numberOfSlides = slides.length;
        let slideNumber = 0;

        //image slider next button
        nextBtn.addEventListener("click", () => {
        slides.forEach((slide) => {
            slide.classList.remove("active");
        });
        slideIcons.forEach((slideIcon) => {
            slideIcon.classList.remove("active");
        });

        slideNumber++;

        if(slideNumber > (numberOfSlides - 1)){
            slideNumber = 0;
        }

        slides[slideNumber].classList.add("active");
        slideIcons[slideNumber].classList.add("active");
        });

        //image slider previous button
        prevBtn.addEventListener("click", () => {
        slides.forEach((slide) => {
            slide.classList.remove("active");
        });
        slideIcons.forEach((slideIcon) => {
            slideIcon.classList.remove("active");
        });

        slideNumber--;

        if(slideNumber < 0){
            slideNumber = numberOfSlides - 1;
        }

        slides[slideNumber].classList.add("active");
        slideIcons[slideNumber].classList.add("active");
        });

        //image slider autoplay
        let playSlider;

        let repeater = () => {
        playSlider = setInterval(function(){
            slides.forEach((slide) => {
            slide.classList.remove("active");
            });
            slideIcons.forEach((slideIcon) => {
            slideIcon.classList.remove("active");
            });

            slideNumber++;

            if(slideNumber > (numberOfSlides - 1)){
            slideNumber = 0;
            }

            slides[slideNumber].classList.add("active");
            slideIcons[slideNumber].classList.add("active");
        }, 4000);
        }
        repeater();

        //stop the image slider autoplay on mouseover
        slider.addEventListener("mouseover", () => {
        clearInterval(playSlider);
        });

        //start the image slider autoplay again on mouseout
        slider.addEventListener("mouseout", () => {
        repeater();
        });
/*---------------------------------------------------------------------------------------*/