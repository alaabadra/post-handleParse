document.querySelector(".logout-btn").addEventListener("click", event => {
  fetch("/delete-cookie")
    .then(response => (window.location.href = "/"))
    .catch(err => (window.location.href = "/"));
});
