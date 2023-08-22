// set cookie expiration time (in days)
const cookieExpiry = 7;

// function to set cookie
function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  const expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

// function to get cookie
function getCookie(cname) {
  const name = cname + "=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

// function to check if cookie is set
function checkCookie() {
  const cookieValue = getCookie("accept-cookies");
  if (cookieValue !== "") {
    document.getElementById("cookie-bar").classList.add("hide");
  } else {
    document.getElementById("cookie-bar").classList.remove("hide");
  }
}

// check cookie when page loads
window.onload = function() {
  checkCookie();
};

// close cookie bar on button click
document.getElementById("accept-cookies").addEventListener("click", function() {
  setCookie("accept-cookies", "true", cookieExpiry);
  document.getElementById("cookie-bar").classList.add("hide");
});

// close cookie bar after specified time
const cookieBar = document.getElementById("cookie-bar");
if (cookieBar) {
  setTimeout(function() {
    if (!getCookie("accept-cookies")) {
      cookieBar.classList.add("hide");
    }
  }, 50000); // change this to your desired time in milliseconds
}
// funkcja zamykająca pasek cookies
function hideCookieBar() {
  const cookieBar = document.getElementById("cookie-bar");
  cookieBar.classList.add("hide");
}

// funkcja zapisująca preferencje użytkownika w localStorage
function setCookiePreference(preference) {
  localStorage.setItem("cookie-preference", preference);
}

// zapisanie preferencji "false" w localStorage po kliknięciu przycisku "Reject"
const rejectCookiesBtn = document.getElementById("reject-cookies");
rejectCookiesBtn.addEventListener("click", function() {
  hideCookieBar();
  setCookiePreference("false");
});

// zapisanie preferencji "true" w localStorage po kliknięciu przycisku "Accept"
const acceptCookiesBtn = document.getElementById("accept-cookies");
acceptCookiesBtn.addEventListener("click", function() {
  hideCookieBar();
  setCookiePreference("true");
});

// wyświetlenie paska cookies tylko wtedy, gdy użytkownik nie zdecydował jeszcze o preferencjach
const cookiePreference = localStorage.getItem("cookie-preference");
if (cookiePreference === null) {
  const cookieBar = document.getElementById("cookie-bar");
  cookieBar.classList.remove("hide");
}