// Display browser info using Navigator object
document.getElementById("browserName").textContent =
  "Browser Name: " + navigator.appName;

document.getElementById("browserVersion").textContent =
  "Browser Version: " + navigator.appVersion;

document.getElementById("platform").textContent =
  "Platform: " + navigator.platform;

// Geolocation (requires user permission)
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function (position) {
    document.getElementById("geoLocation").textContent =
      "Geolocation: Latitude " + position.coords.latitude +
      ", Longitude " + position.coords.longitude;
  });
} else {
  document.getElementById("geoLocation").textContent =
    "Geolocation not supported.";
}
