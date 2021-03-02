/* script.js in guide-castle-goodroid */

// support css
let onScrollOrResize_ticking = false;
function onScrollOrResize(scroll) {

  // header
  const headerImgDiv = document.getElementById("header-background");
  const headerMainDiv = document.getElementById("header-main");
  const headerImgHeight = headerImgDiv.clientHeight;
  const headerMainHeight = headerMainDiv.clientHeight;
  const headerHeightDifference = headerImgHeight - headerMainHeight;
  //if (scroll < headerHeightDifference) {
    headerImgDiv.style.top = Math.max(-scroll, -headerHeightDifference);
  //}

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
