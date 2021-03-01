/* script.js in guide-castle-goodroid */

let headerImgDiv;
let headerImgHeight;

window.onload = () => {
  headerImgDiv = document.getElementsByClassName("header-image")[0];
  headerImgHeight = headerImgDiv.clientHeight;
  console.log(`header's image's height is ${headerImgHeight}`);
}

function onScroll(scroll) {
  console.log(`scroll now at ${scroll}!`);
}

// scroll event
let onScroll_lastScrollPos = 0;
let onScroll_ticking = false;
window.addEventListener('scroll', function(e) {
  onScroll_lastScrollPos = window.scrollY;
  if (!onScroll_ticking) {
    window.requestAnimationFrame(() => {
      onScroll(onScroll_lastScrollPos);
      onScroll_ticking = false;
    });
    onScroll_ticking = true;
  }
});
