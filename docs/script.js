/* script.js in guide-castle-goodroid */

// support css
let onScrollOrResize_ticking = false;
function onScrollOrResize(scroll) {
  console.log(`scroll is ${scroll}`);

  // header
  

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
