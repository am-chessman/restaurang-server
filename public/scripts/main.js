const navCloseEl = document.querySelector('.nav__close');
const navList = document.querySelector('.nav__list');
const navIconEl = document.querySelector('.nav__icon');
const navBgOverlayEl = document.querySelector('.nav__bgOverlay');


window.addEventListener('DOMContentLoaded', () =>{
  document.body.style.visibility = 'visible';
  
});

const navOpen = () => {
  navList.classList.add('show');
  navBgOverlayEl.classList.add('active');
  document.body.style = 'visibility: visible; height: 100vh; width:100vw; overflow:hidden;';
}

const navClose = () => {
  navList.classList.remove('show');
  navBgOverlayEl.classList.remove('active');
  document.body.style = 'visibility: visible; height: initial; width: 100%; overflow-x: hidden;';
}

navIconEl.addEventListener('click', navOpen);

navCloseEl.addEventListener('click', navClose);

navBgOverlayEl.addEventListener('click', navClose);


document.addEventListener("DOMContentLoaded", function() {
  const carousel = document.querySelector(".carousel");
  if (carousel) {
      const arrowBtns = document.querySelectorAll(".wrapper i");
      const firstCard = carousel.querySelector(".card");
      const firstCardWidth = firstCard.offsetWidth + parseInt(getComputedStyle(firstCard).marginRight);
      
      arrowBtns.forEach(function(btn) {
          btn.addEventListener("click", function() {
              if (btn.id === "left") {
                  carousel.scrollLeft -= firstCardWidth;
                  if (carousel.scrollLeft < 0) {
                      carousel.scrollLeft = 0;
                  }
              } else {
                  carousel.scrollLeft += firstCardWidth;
              }
          });
      });
  } else {
      console.error("Carousel element not found!");
  }
});





document.addEventListener("DOMContentLoaded", function() {
  const filterSelect = document.querySelector("#filterSelect");
  if (filterSelect) {
      const dishItems = document.querySelectorAll(".dishGrid__item2");

      filterSelect.addEventListener("change", function() {
          const selectedOption = filterSelect.value;

          dishItems.forEach(function(item) {
              const itemPrice = parseFloat(item.getAttribute("data-price"));
              if (selectedOption === "all" ||
                  (selectedOption === "small" && itemPrice <= 12) ||
                  (selectedOption === "medium" && itemPrice > 12 && itemPrice <= 14) ||
                  (selectedOption === "large" && itemPrice > 14)) {
                  item.classList.remove("hidden");
              } else {
                  item.classList.add("hidden");
                  console.log("hello");
              }
          });
      });
  } else {
      console.error("Filter select element not found!");
  }
});


