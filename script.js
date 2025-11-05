document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const user = document.getElementById("username").value;
      const pass = document.getElementById("password").value;

      if (user === "admin" && pass === "1234") {
        localStorage.setItem("loggedIn", "true");
        window.location.href = "channels.html";
      } else {
        alert("بيانات الدخول غير صحيحة!");
      }
    });
  }

  if (window.location.pathname.includes("channels.html")) {
    const loggedIn = localStorage.getItem("loggedIn");
    if (!loggedIn) window.location.href = "index.html";
  }
});

function logout() {
  localStorage.removeItem("loggedIn");
  window.location.href = "index.html";
}
