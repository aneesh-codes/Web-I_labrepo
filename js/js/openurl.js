document.getElementById("openBtn").addEventListener("click", function () {
  let url = document.getElementById("urlInput").value;

  // If user forgets http/https, add it
  if (!url.startsWith("http://") && !url.startsWith("https://")) {
    url = "https://" + url;
  }

  window.open(url, "_blank"); // open in new tab
});
