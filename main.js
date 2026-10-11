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

// Give Lively renders its widget in a shadow root with suggested-amount
// buttons sized for a single row of four. Let them wrap so a fifth amount
// stays fully visible on narrow screens.
document.addEventListener("DOMContentLoaded", function () {
  var widget = document.getElementById("give-lively-widget");
  if (!widget) return;

  var css =
    ".gl-widget__suggested-amounts-container { flex-wrap: wrap; }" +
    ".gl-widget__suggested-amounts-container > .gl-widget__suggested-amount-button { flex: 1 1 4.5rem; width: auto; }";
  var attempts = 0;

  var timer = setInterval(function () {
    var host = widget.querySelector("gl-donation-widget-container");
    var root = host && host.shadowRoot;
    if (root && root.querySelector(".gl-widget__suggested-amounts-container")) {
      var style = document.createElement("style");
      style.textContent = css;
      root.appendChild(style);
      clearInterval(timer);
    } else if (++attempts >= 100) {
      clearInterval(timer);
    }
  }, 200);
});
