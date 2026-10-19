// Decode obfuscated email addresses (base64 of the reversed address) so the
// plaintext never appears in the HTML source scraped by bots.
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("[data-email]").forEach(function (el) {
    var email = atob(el.getAttribute("data-email")).split("").reverse().join("");
    el.setAttribute("href", "mailto:" + email);
    if (el.hasAttribute("data-email-text")) el.textContent = email;
  });
});
