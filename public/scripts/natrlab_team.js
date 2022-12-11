let photos = document.querySelectorAll('.katalina_photo');
console.log(photos)

photos.forEach(elem => {
elem.addEventListener('click', function() {
    let photo_link = elem.style.backgroundImage;
    window.open(photo_link.substring(5, photo_link.length-2))
    //elem.children.classList.toggle('show');
    console.log(elem.style.backgroundImage);
  });
})
    