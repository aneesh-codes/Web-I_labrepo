// Store cookie
function setCookie(name, value, days) {
  const d = new Date();
  d.setTime(d.getTime() + (days*24*60*60*1000));
  document.cookie = `${name}=${value};expires=${d.toUTCString()};path=/`;
}

// Read cookie
function getCookie(name) {
  const cookies = document.cookie.split(';');
  for (let c of cookies) {
    let [key, val] = c.trim().split('=');
    if (key === name) return val;
  }
  return "Cookie not found";
}

// Delete cookie
function deleteCookie(name) {
  document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/`;
  alert("Cookie deleted");
}
