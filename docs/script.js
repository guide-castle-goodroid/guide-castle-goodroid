/* script.js in guide-castle-goodroid */

let headerImgDiv;

window.onload = () => {
  headerImgDiv = document.getElementsByClassName("header-image")[0];
  console.log(`header's image's height is ${headerImgHeight}`);
}

let onScrollOrResize_ticking = false;
function onScrollOrResize(scroll) {
  const headerImgHeight = headerImgDiv.clientHeight;
  //if (scroll < )
  onScrollOrResize_ticking = false;
}

// scroll event
let onScroll_lastScrollPos = 0;
window.addEventListener("scroll", e => {
  onScroll_lastScrollPos = window.scrollY;
  if (!onScrollOrResize_ticking) {
    window.requestAnimationFrame(() => {
      onScrollOrResize(onScroll_lastScrollPos);
    });
    onScrollOrResize_ticking = true;
  }
});

// resize event
window.addEventListener("resize", e => {
  if (!onScrollOrResize_ticking) {
    window.requestAnimationFrame(() => {
      onScrollOrResize(onScroll_lastScrollPos);
    });
    onScrollOrResize_ticking = true;
  }
});
