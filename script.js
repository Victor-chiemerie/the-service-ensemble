// IMPORTANT: Replace this placeholder with the business WhatsApp number in international format.
// Nigeria example: 2348012345678 (no +, spaces or leading 0).
const WHATSAPP_NUMBER = "2348000000000";

const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");
const bookingForm = document.querySelector("#booking-form");
const formMessage = document.querySelector("#form-message");
const serviceHint = document.querySelector("#service-hint");
const serviceCheckboxes = [...document.querySelectorAll('input[name="services"]')];

document.querySelector("#year").textContent = new Date().getFullYear();

function closeMenu() {
  menuToggle?.setAttribute("aria-expanded", "false");
  mainNav?.classList.remove("is-open");
  document.body.classList.remove("menu-open");
}
menuToggle?.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  mainNav.classList.toggle("is-open", !isOpen);
  document.body.classList.toggle("menu-open", !isOpen);
});
mainNav?.querySelectorAll("a").forEach(link => link.addEventListener("click", closeMenu));

document.querySelectorAll("[data-service]").forEach(link => {
  link.addEventListener("click", () => {
    const service = link.dataset.service;
    serviceCheckboxes.forEach(box => { box.checked = box.value === service; });
  });
});

serviceCheckboxes.forEach(box => box.addEventListener("change", () => {
  if (serviceCheckboxes.some(item => item.checked)) {
    serviceHint.textContent = "Great — we’ll discuss availability for your selected service(s).";
  } else {
    serviceHint.textContent = "Select at least one service.";
  }
}));

function openWhatsApp(message) {
  const number = WHATSAPP_NUMBER.replace(/\D/g, "");
  if (!number || number === "2348000000000") {
    formMessage.textContent = "The website is ready, but the WhatsApp number is still a placeholder. Open script.js and replace WHATSAPP_NUMBER with your sister’s business number, then try again.";
    formMessage.scrollIntoView({ behavior: "smooth", block: "nearest" });
    return;
  }
  const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

document.querySelector("#direct-whatsapp")?.addEventListener("click", event => {
  event.preventDefault();
  openWhatsApp("Hello The Service Ensemble! I'd like to make an enquiry about event-day support.");
});

bookingForm?.addEventListener("submit", event => {
  event.preventDefault();
  const formData = new FormData(bookingForm);
  const services = formData.getAll("services");
  if (!services.length) {
    serviceHint.textContent = "Please select at least one service so we know how to help.";
    document.querySelector(".services-field").scrollIntoView({ behavior: "smooth", block: "center" });
    return;
  }

  const dateValue = String(formData.get("date") || "");
  const date = dateValue ? new Date(`${dateValue}T12:00:00`).toLocaleDateString(undefined, {
    day: "numeric", month: "long", year: "numeric"
  }) : "Not specified";

  const message = [
    "Hello The Service Ensemble! I'd like to make a booking enquiry.",
    "",
    "*MY DETAILS*",
    `Name: ${formData.get("name")}`,
    `WhatsApp / Phone: ${formData.get("phone")}`,
    "",
    "*EVENT DETAILS*",
    `Event type: ${formData.get("event")}`,
    `Event date: ${date}`,
    `Venue / city: ${formData.get("venue")}`,
    `Services requested: ${services.join(", ")}`,
    `Additional information: ${formData.get("notes") || "None provided"}`,
    "",
    "Please let me know your availability and the next steps. Thank you!"
  ].join("\n");

  formMessage.textContent = "Preparing your enquiry for WhatsApp…";
  openWhatsApp(message);
});

// Avoid allowing a visitor to choose a past date for an upcoming event.
const dateInput = document.querySelector('input[name="date"]');
if (dateInput) {
  const now = new Date();
  const localToday = new Date(now.getTime() - now.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
  dateInput.min = localToday;
}
