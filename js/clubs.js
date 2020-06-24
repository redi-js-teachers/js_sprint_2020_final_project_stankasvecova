const thumbnailEl = document.querySelector(".thumbnail");

function mouseOverHandler() {
  thumbnailEl.classList.add("changeBorder")
}
function mouseLeaveHandler() {
  thumbnailEl.classList.remove("changeBorder")
}
thumbnailEl.addEventListener('mouseover', mouseOverHandler);
thumbnailEl.addEventListener('mouseleave', mouseLeaveHandler);