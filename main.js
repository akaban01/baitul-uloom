document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");
  if (!toggle || !links) return;

  toggle.addEventListener("click", function () {
    links.classList.toggle("is-open");
    var expanded = links.classList.contains("is-open");
    toggle.setAttribute("aria-expanded", expanded ? "true" : "false");
  });
});
