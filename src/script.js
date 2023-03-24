let doctile = document.title;

window.addEventListener("blur",() => {
  document.title = "Hey Come back";
})
window.addEventListener("focus", () => {
  document.title = "Portfolio"
})