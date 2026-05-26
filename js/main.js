/**
 * Jouguts Store - Main JavaScript
 */

var PHONE = "573135527060";

/**
 * Opens the modal with the selected product name
 * @param {string} productName - Name of the selected service
 */
function openModal(productName) {
  var msg = encodeURIComponent(
    "Hola estoy interesado en una pantalla de " + productName + ", cuentas con disponibilidad?"
  );
  document.getElementById("btn-whatsapp").href = "https://wa.me/" + PHONE + "?text=" + msg;
  document.getElementById("btn-telegram").href = "https://t.me/+" + PHONE + "?text=" + msg;
  document.querySelector(".modal-product").textContent = productName;
  document.getElementById("modal-overlay").classList.add("active");
}

/**
 * Closes the modal
 */
function closeModal() {
  document.getElementById("modal-overlay").classList.remove("active");
}

// ===== Spotlight Effect (mouse-tracking glow) =====
document.querySelectorAll(".service-row").forEach(function (row) {
  row.addEventListener("mousemove", function (e) {
    var rect = row.getBoundingClientRect();
    var x = ((e.clientX - rect.left) / rect.width) * 100;
    var y = ((e.clientY - rect.top) / rect.height) * 100;
    row.style.setProperty("--spot-x", x + "%");
    row.style.setProperty("--spot-y", y + "%");
  });
});

// ===== Event Listeners =====

// Close modal when clicking outside
document.getElementById("modal-overlay").addEventListener("click", function (e) {
  if (e.target === this) closeModal();
});

// Close modal with Escape key
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") closeModal();
});

// Attach click handlers to each service row
document.querySelectorAll(".service-row").forEach(function (row) {
  row.addEventListener("click", function () {
    var label = row.querySelector(".svc-label");
    var sub = row.querySelector(".svc-sub");
    var name = label ? label.innerText.trim() : "";
    if (sub && sub.innerText.trim()) name += " " + sub.innerText.trim();
    openModal(name);
  });
});