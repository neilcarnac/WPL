let menu = document.querySelector('.header .menu');

document.querySelector('#menu-btn').onclick = () => {
   menu.classList.add('.active');
   console.log("kk")
}

window.onscroll = () => {
   menu.classList.remove('.active');
}

document.querySelectorAll('.view-properties .details .thumb .small-images img').forEach((images) =>{
      images.onclick = () =>{
      src = images.getAttribute('src');
      document.querySelector('.view-properties .details .thumb .big-image img').src = src;
      console.log('hh');
   }
});

document.querySelectorAll('.faq .box-container .box h3').forEach(headings => {
   headings.onclick = () => {
      headings.parentElement.classList.toggle('active');
   }

});