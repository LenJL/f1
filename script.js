let nextBtn = document.querySelector(".next");
let prevBtn = document.querySelector(".prev");

let slider = document.querySelector(".slider");
let sliderList = slider.querySelector(".slider .list");
let thumbnail = document.querySelector(".slider .thumbnail");

// Update thumbnails dynamically
function updateThumbnails() {
  thumbnail.innerHTML = ''; // Clear the current thumbnails
  let sliderItems = sliderList.querySelectorAll(".item");

  sliderItems.forEach(item => {
    let img = item.querySelector('img').cloneNode(); // Clone the image
    let thumbnailItem = document.createElement('div');
    thumbnailItem.className = 'item';
    thumbnailItem.appendChild(img);
    thumbnail.appendChild(thumbnailItem);
  });
}


updateThumbnails();


nextBtn.onclick = function () {
  moveSlider("next");
};


prevBtn.onclick = function () {
  moveSlider("prev");
};

function moveSlider(direction) {
  let sliderItems = sliderList.querySelectorAll(".item");

  if (direction === "next") {
    sliderList.appendChild(sliderItems[0]);
  } else {
    sliderList.prepend(sliderItems[sliderItems.length - 1]);
  }

  updateThumbnails();

  slider.classList.add(direction);

  slider.addEventListener(
    "animationend",
    function () {
      slider.classList.remove(direction);
    },
    { once: true }
  );
}
